import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { email } = await req.json();

  try {
    await connectDB();
    const user = await prisma.user.findUnique({ where: { email }, include: { cart: true } });

    user?.cart?.map(async (item) => {
      const { id, cartId, ...others } = item

      await prisma.collection.create({
        data: {
          collectionId: user?.id,
          ...others
        },
      });
    })

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

