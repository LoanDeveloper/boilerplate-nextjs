// app/api/session/route.ts
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    return NextResponse.json(session);
  } catch (error) {
    console.error("Error getting session in API route:", error);
    return NextResponse.json({ error: "Failed to retrieve session" }, { status: 500 });
  }
}
