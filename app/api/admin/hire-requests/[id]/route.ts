import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export type AdminPayload = {
  userId: number;
  email: string;
  role: 'super-admin' | 'manager';
};

export function getTokenFromRequest(req: NextRequest): string | null {
  const auth = req.headers.get('authorization');
  if (auth?.startsWith('Bearer ')) return auth.slice(7).trim();

  const cookie = req.cookies.get('admin_token');
  if (cookie?.value) return cookie.value;

  return null;
}

export function requireAdmin(req: NextRequest): AdminPayload | null {
  const token = getTokenFromRequest(req);
  if (!token) return null;

  const secret = process.env.JWT_SECRET;
  if (!secret) return null;

  try {
    const decoded = jwt.verify(token, secret, {
      algorithms: ['HS256'],
    }) as AdminPayload;

    if (!decoded?.userId || !decoded?.email || !decoded?.role) return null;
    if (!['super-admin', 'manager'].includes(decoded.role)) return null;

    return decoded;
  } catch {
    return null;
  }
}