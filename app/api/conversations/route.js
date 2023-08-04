import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId, isGroup, members, name } = body; // userId dışındaki diğer parametreleri daha sonraki kullanımlar için çekiyoruz

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
