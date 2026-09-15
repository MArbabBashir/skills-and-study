import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { mkdir, writeFile } from "fs/promises";
import sql from "@/lib/db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function makeSafeFileName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const requestId = Number(id);

    if (!Number.isInteger(requestId) || requestId <= 0) {
      return NextResponse.json(
        { success: false, message: "Invalid request ID." },
        { status: 400 }
      );
    }

    // ----------------------------------------------
    // AUTH
    // ----------------------------------------------

    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    // ----------------------------------------------
    // GET EXISTING REQUEST
    // ----------------------------------------------

    const existing = await sql`
      SELECT
        id,
        name,
        profile_image
      FROM "hire-me-requests"
      WHERE id = ${requestId}
      LIMIT 1
    `;

    if (existing.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Hire request not found.",
        },
        { status: 404 }
      );
    }

    const existingRequest = existing[0];

    // ----------------------------------------------
    // FORM DATA
    // ----------------------------------------------

    const formData = await request.formData();

    const name = String(formData.get("name") ?? "");
    const linkedin_profile = String(
      formData.get("linkedin_profile") ?? ""
    );
    const email = String(formData.get("email") ?? "");
    const domain = String(formData.get("domain") ?? "");
    const comment = String(formData.get("comment") ?? "");
    const status = String(
      formData.get("status") ?? "pending"
    );
    const admin_note = String(
      formData.get("admin_note") ?? ""
    );

    const image = formData.get("image");

    // ----------------------------------------------
    // IMAGE PATH
    // ----------------------------------------------

    let profileImagePath =
      existingRequest.profile_image;

    // ----------------------------------------------
    // NEW IMAGE UPLOAD
    // ----------------------------------------------

    if (image instanceof File && image.size > 0) {
      const originalFileName = image.name.toLowerCase();

      if (
        image.type !== "image/webp" &&
        !originalFileName.endsWith(".webp")
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Only WEBP images are allowed.",
          },
          { status: 400 }
        );
      }

      const maxSize = 5 * 1024 * 1024;

      if (image.size > maxSize) {
        return NextResponse.json(
          {
            success: false,
            message: "Image must be smaller than 5 MB.",
          },
          { status: 400 }
        );
      }

      const safeName = makeSafeFileName(
        name || String(existingRequest.name)
      );

      if (!safeName) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid student name.",
          },
          { status: 400 }
        );
      }

      const fileName = `${safeName}.webp`;

      const uploadDirectory = path.join(
        process.cwd(),
        "public",
        "hire-student"
      );

      await mkdir(uploadDirectory, {
        recursive: true,
      });

      const filePath = path.join(
        uploadDirectory,
        fileName
      );

      const imageBuffer = Buffer.from(
        await image.arrayBuffer()
      );

      await writeFile(filePath, imageBuffer);

      profileImagePath =
        `/hire-student/${fileName}`;
    }

    // ----------------------------------------------
    // VALIDATION
    // ----------------------------------------------

    if (
      !name ||
      !linkedin_profile ||
      !email ||
      !domain
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, LinkedIn, email and domain are required.",
        },
        { status: 400 }
      );
    }

    if (
      status !== "pending" &&
      status !== "approved" &&
      status !== "disapproved"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status.",
        },
        { status: 400 }
      );
    }

    // ----------------------------------------------
    // UPDATE DATABASE
    // ----------------------------------------------

    const result = await sql`
      UPDATE "hire-me-requests"
      SET
        name = ${name.trim()},
        linkedin_profile = ${linkedin_profile.trim()},
        email = ${email.trim().toLowerCase()},
        domain = ${domain.trim()},
        comment = ${comment.trim()},
        profile_image = ${profileImagePath},
        status = ${status},
        admin_note = ${
          admin_note.trim() || null
        },
        reviewed_at = ${
          status === "approved" ||
          status === "disapproved"
            ? sql`CURRENT_TIMESTAMP`
            : sql`reviewed_at`
        },
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${requestId}
      RETURNING
        id,
        name,
        linkedin_profile,
        email,
        domain,
        comment,
        profile_image,
        status,
        admin_note,
        reviewed_at,
        created_at,
        updated_at
    `;

    return NextResponse.json({
      success: true,
      message: "Hire request updated successfully.",
      request: result[0],
    });
  } catch (error) {
    console.error(
      "PATCH /api/admin/hire-requests/[id] error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save request.",
      },
      { status: 500 }
    );
  }
}