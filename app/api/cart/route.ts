import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { bookId, email } = await req.json();

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email } });
    const book = await prisma.books.findUnique({ where: { id: bookId }})
    const { id, ...others }: any = book


    await prisma.cart.create({
      data: {
        cartId: user?.id!,
        ...others
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

