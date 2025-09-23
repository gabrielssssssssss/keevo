import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
    matcher: "/api/auth/machin"
}