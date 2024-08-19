// next-auth.d.ts

import { User } from '@/services/auth';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string | null;
    refreshToken: string | null;
    expires: number | null;
    user: User
  }
}
