import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { email: string }}) => {
  const { email } = params

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email }, include: { collection: true } });

    return NextResponse.json({ data: user?.collection }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};