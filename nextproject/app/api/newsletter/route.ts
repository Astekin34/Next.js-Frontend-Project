import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const newEntry = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({
      message: "Subscribed successfully",
      entry: newEntry,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
