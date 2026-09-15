import sql from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`
      SELECT 1 AS connected
    `;

    return Response.json({
      success: true,
      message: "PostgreSQL connected successfully!",
      result,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "PostgreSQL connection failed",
      },
      { status: 500 }
    );
  }
}