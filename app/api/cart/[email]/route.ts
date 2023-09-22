import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { email: string }}) => { 
  // req: Request (#1 method)
  // const email = req.url.split('cart/')[1]

  // 2nd method
  const { email } = params

    try {
      await connectDB();
      const user = await prisma.user.findUnique({
        where: { email },
        include: { cart: true }
      });
  
      console.log(user)
      return NextResponse.json({ message: user }, { status: 200 })
    } catch (err) {
      console.log(err);
      return NextResponse.json(err, { status: 500 });
    }
  };
  