import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const response = await fetch(`https://leakcheck.net/api/public?key=49535f49545f5245414c4c595f4150495f4b4559&check=${body["password"]}`);
        if (!response.ok) {
            return false;
        }
        const data = await response.json();
        return NextResponse.json({"success": data["success"]});
    } catch(e) {
        return NextResponse.json({"success": false, "error": "bad request"})
    }
}