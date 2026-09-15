import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";
import { verifyAdminToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const admin = await verifyAdminToken(token);

        if (!admin) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const messages = await sql`
            SELECT
                id,
                name,
                email,
                subject,
                inquiry_type,
                message,
                created_at
            FROM contact_messages
            ORDER BY created_at DESC
        `;

        return NextResponse.json({
            success: true,
            messages,
        });
    } catch (error) {
        console.error("Error fetching contact messages:", error);

        return NextResponse.json(
            { error: "Failed to fetch contact messages" },
            { status: 500 }
        );
    }
}