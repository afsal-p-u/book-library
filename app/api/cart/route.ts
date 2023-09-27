import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title, image, category, price, star, author, email } = await req.json();

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email } });
    await prisma.cart.create({
      data: {
        cartId: user?.id,
        title,
        image,
        category,
        price,
        star,
        author,
      },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

