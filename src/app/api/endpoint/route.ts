import { NextResponse } from "next/server";

let storedName: string | null = null;

export async function GET() {
  if (storedName) {
    return NextResponse.json({ message: "Your Name is: ", name: storedName });
  } else {
    return NextResponse.json({ message: "No name stored yet." });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  storedName = body.name;
  return NextResponse.json({ message: "Name stored successfully!"});
}