import { NextResponse } from "next/server";
import pool from "@/lib/db";

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

        const result = await pool.query(
            `INSERT INTO contact_messages
            (name, email, subject, inquiry_type, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [name, email, subject, inquiryType, message]
        );

        return NextResponse.json(
            {
                success: true,
                data: result.rows[0],
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