import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import sql from "@/lib/db";

// ------------------------------------------------------------
// Auth helper
// ------------------------------------------------------------
type AdminPayload = {
  userId: number;
  email: string;
  role: "super-admin" | "manager";
};

function getTokenFromRequest(req: NextRequest): string | null {
  const auth = req.headers.get("authorization");

  if (auth?.startsWith("Bearer ")) {
    return auth.slice(7).trim();
  }

  const cookie = req.cookies.get("admin_token");

  if (cookie?.value) {
    return cookie.value;
  }

  return null;
}

function requireAdmin(req: NextRequest): AdminPayload | null {
  const token = getTokenFromRequest(req);

  if (!token) return null;

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error(
      "JWT_SECRET is not set — refusing all admin requests"
    );
    return null;
  }

  try {
    const decoded = jwt.verify(token, secret, {
      algorithms: ["HS256"],
    }) as AdminPayload;

    if (!decoded?.userId || !decoded?.email || !decoded?.role) {
      return null;
    }

    if (!["super-admin", "manager"].includes(decoded.role)) {
      return null;
    }

    return decoded;
  } catch (err) {
    console.warn(
      "JWT verify failed:",
      err instanceof Error ? err.message : err
    );

    return null;
  }
}

// ------------------------------------------------------------
// GET — list all hire requests
// ------------------------------------------------------------
export async function GET(req: NextRequest) {
  const admin = requireAdmin(req);

  if (!admin) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized.",
      },
      { status: 401 }
    );
  }

  try {
    const requests = await sql`
      SELECT
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
      FROM "hire-me-requests"
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error(
      "GET /api/admin/hire-requests error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load hire requests.",
      },
      { status: 500 }
    );
  }
}