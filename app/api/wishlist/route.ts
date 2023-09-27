import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title, image, category, price, star, author, email } = await req.json()

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email } });

    const existingBook = await prisma.wishlist.findFirst({
      where: {
        wishlistId: user?.id,
        title
      }
    })
    if (existingBook) {
      return NextResponse.json({ message: "Book alredy in your wishlist" }, { status: 401 })
    }

    await prisma.wishlist.create({
      data: {
        wishlistId: user?.id,
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
    return NextResponse.json(err, { status: 500 });
  }
};
