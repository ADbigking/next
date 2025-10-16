// app/api/auth/[...nextauth]/route.ts
process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://127.0.0.1:7890';
import 'global-agent/bootstrap';
import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "../options";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };