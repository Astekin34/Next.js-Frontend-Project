import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: true,
        imageUrl: true,
        createdAt: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
