import Razorpay from "razorpay";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEYID!,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEYSECRET!,
  });
  const { total } = await req.json()

  try {
    const res = await razorpay.orders.create({
      amount: total * 100,
      currency: "USD",
      receipt: nanoid(),
    });

    return NextResponse.json({ data: res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 })
  }
};
