import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear the admin_token cookie.
  // Must match: same name, same path, same domain, same secure/sameSite.
  response.cookies.set({
    name: 'admin_token',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,                 // expire immediately
    expires: new Date(0),      // belt-and-braces for older browsers
  });

  return response;
}