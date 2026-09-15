import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      linkedin_profile,
      email,
      domain,
      comment,
    } = body;

    // Validate required fields
    if (
      !name?.trim() ||
      !linkedin_profile?.trim() ||
      !email?.trim() ||
      !domain?.trim() ||
      !comment?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required.',
        },
        { status: 400 }
      );
    }

    // Validate LinkedIn URL
    try {
      const linkedinUrl = new URL(linkedin_profile.trim());

      if (
        !linkedinUrl.hostname.includes('linkedin.com')
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'Please enter a valid LinkedIn profile URL.',
          },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid LinkedIn profile URL.',
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      );
    }

    // Insert request into MySQL
    const [result] = await pool.execute(
      `
        INSERT INTO \`hire-me-requests\`
        (
          name,
          linkedin_profile,
          email,
          domain,
          comment,
          profile_image,
          status
        )
        VALUES (?, ?, ?, ?, ?, NULL, 'pending')
      `,
      [
        name.trim(),
        linkedin_profile.trim(),
        email.trim().toLowerCase(),
        domain.trim(),
        comment.trim(),
      ]
    );

    return NextResponse.json(
      {
        success: true,
        message:
          'Your profile request has been submitted successfully.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/hire-requests error:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          'Something went wrong while submitting your request.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const [rows] = await pool.execute(`
      SELECT
        id,
        name,
        linkedin_profile,
        email,
        domain,
        comment,
        profile_image
      FROM \`hire-me-requests\`
      WHERE status = 'approved'
        AND profile_image IS NOT NULL
      ORDER BY created_at DESC
    `);

    return NextResponse.json({
      success: true,
      students: rows,
    });
  } catch (error) {
    console.error(
      'GET /api/hire-requests error:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to load approved students.',
      },
      { status: 500 }
    );
  }
}