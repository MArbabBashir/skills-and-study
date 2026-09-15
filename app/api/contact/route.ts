import { NextResponse } from "next/server";
import sql from "@/lib/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            subject,
            inquiryType,
            message,
        } = body;

        if (!name || !email || !subject || !inquiryType || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const result = await sql`
            INSERT INTO contact_messages
            (name, email, subject, inquiry_type, message)
            VALUES (
                ${name},
                ${email},
                ${subject},
                ${inquiryType},
                ${message}
            )
            RETURNING *
        `;

        return NextResponse.json(
            {
                success: true,
                data: result[0],
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error saving contact message:", error);

        return NextResponse.json(
            { error: "Failed to save message" },
            { status: 500 }
        );
    }
}