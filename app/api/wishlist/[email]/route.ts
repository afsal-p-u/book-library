import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { email: string }}) => {
  const { email } = params

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email }, include: { wishlist: true } });

    return NextResponse.json({ data: user?.wishlist }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  const { email } = params;

  try {
    await connectDB()
    await prisma.wishlist.delete({ where: { id: parseInt(email) }})

    return NextResponse.json({ message: "Removed from cart" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
};
