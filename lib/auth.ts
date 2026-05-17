import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import bcrypt from 'bcryptjs';
export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [Credentials({ credentials: {email:{},password:{}}, authorize: async (c)=>{ if(!c?.email||!c.password) return null; const u=await prisma.user.findUnique({where:{email:c.email as string}}); if(!u) return null; const ok=await bcrypt.compare(c.password as string,u.passwordHash); return ok?{id:u.id,email:u.email,name:u.name,role:u.role}:null; } })],
  callbacks: { jwt: async ({token,user})=>{if(user) token.role=(user as any).role; return token;} }
});
