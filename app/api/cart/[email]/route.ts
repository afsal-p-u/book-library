import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  // req: Request (#1 method)
  // const email = req.url.split('cart/')[1]

  // 2nd method
  const { email } = params;

  try {
    await connectDB();
    const user = await prisma.user.findUnique({
      where: { email },
      include: { cart: true },
    });
    
    const filtered = user?.cart?.map((item) => {
      const { downloadUrl, ...others } = item!
      return others
    })

    return NextResponse.json({ cart: filtered }, { status: 200 });
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
    await connectDB();
    await prisma.cart.delete({ where: { id: parseInt(email) } });

    return NextResponse.json(
      { message: "Removed from cart" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
