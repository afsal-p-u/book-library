import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { bookId, email } = await req.json();

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email }, include: { cart: true } });
    const book = await prisma.books.findUnique({ where: { id: bookId }})
    const { id, ...others }: any = book

    const checkCartExist = user?.cart?.map((item) => {
      if (item.title === book?.title.toString()) {
        return true
      } 
      return false
    })

    if (checkCartExist) {
      return NextResponse.json({ message: "Item already exist" }, { status: 401 })
    }

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

export const DELETE = async (req: Request) => {
  const { email } = await req.json()

  try {
    await connectDB()
    const user = await prisma.user.findFirst({
      where: {
        email
      },
      include: { cart: true }
    })

    const cartIds = user?.cart?.map((item) => item.id)

    await prisma.cart.deleteMany({
      where: {
        id: { in: cartIds }
      }
    })

    return NextResponse.json({ message: "Success" }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}