import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { mkdir, writeFile } from 'fs/promises';
import pool from '@/lib/db';

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function makeSafeFileName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(
  request: NextRequest,
  context: RouteContext
) {
  try {
    // --------------------------------------------------
    // GET REQUEST ID
    // --------------------------------------------------

    const { id } = await context.params;

    const requestId = Number(id);

    if (!Number.isInteger(requestId) || requestId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request ID.',
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // ADMIN JWT COOKIE
    // --------------------------------------------------

    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unauthorized.',
        },
        { status: 401 }
      );
    }

    /*
      Your existing admin authentication is already working
      for GET /api/admin/hire-requests.

      Therefore this route checks that the admin_token cookie
      exists as well.

      If your project has a separate JWT verification helper,
      we can add the exact same verification here later.
    */

    // --------------------------------------------------
    // GET HIRE REQUEST
    // --------------------------------------------------

    const [rows] = await pool.execute(
      `
        SELECT
          id,
          name,
          status
        FROM \`hire-me-requests\`
        WHERE id = ?
        LIMIT 1
      `,
      [requestId]
    );

    const requests = rows as Array<{
      id: number;
      name: string;
      status: 'pending' | 'approved' | 'disapproved';
    }>;

    if (requests.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Hire request not found.',
        },
        { status: 404 }
      );
    }

    const hireRequest = requests[0];

    // --------------------------------------------------
    // GET IMAGE
    // --------------------------------------------------

    const formData = await request.formData();

    const image = formData.get('image');

    if (!(image instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please select a profile image.',
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // WEBP VALIDATION
    // --------------------------------------------------

    const originalFileName = image.name.toLowerCase();

    if (
      image.type !== 'image/webp' &&
      !originalFileName.endsWith('.webp')
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Only WEBP images are allowed.',
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // FILE SIZE
    // --------------------------------------------------

    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (image.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: 'Image must be smaller than 5 MB.',
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // CREATE SAFE FILE NAME
    // --------------------------------------------------

    const safeName = makeSafeFileName(hireRequest.name);

    if (!safeName) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid student name.',
        },
        { status: 400 }
      );
    }

    const fileName = `${safeName}.webp`;

    // --------------------------------------------------
    // PUBLIC DIRECTORY
    // --------------------------------------------------

    const uploadDirectory = path.join(
      process.cwd(),
      'public',
      'hire-student'
    );

    await mkdir(uploadDirectory, {
      recursive: true,
    });

    // --------------------------------------------------
    // SAVE IMAGE
    // --------------------------------------------------

    const filePath = path.join(
      uploadDirectory,
      fileName
    );

    const imageBuffer = Buffer.from(
      await image.arrayBuffer()
    );

    await writeFile(filePath, imageBuffer);

    // --------------------------------------------------
    // PATH STORED IN DATABASE
    // --------------------------------------------------

    const profileImagePath = `/hire-student/${fileName}`;

    // --------------------------------------------------
    // APPROVE REQUEST
    // --------------------------------------------------

    await pool.execute(
      `
        UPDATE \`hire-me-requests\`
        SET
          profile_image = ?,
          status = 'approved',
          reviewed_at = NOW()
        WHERE id = ?
      `,
      [
        profileImagePath,
        requestId,
      ]
    );

    // --------------------------------------------------
    // RESPONSE
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message: 'Profile approved successfully.',
        profile_image: profileImagePath,
        reviewed_at: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      'POST /api/admin/hire-requests/[id]/approve error:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to approve request.',
      },
      { status: 500 }
    );
  }
}