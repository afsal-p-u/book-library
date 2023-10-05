import prisma from "@/prisma";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title, author, image, category, price, star, downloadUrl } =
    await req.json();

  try {
    await connectDB();
    await prisma.books.create({
      data: { title, author, image, category, price, star, downloadUrl },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

export const GET = async () => {
  const connectDatabase = await connectDB();
  if (!connectDatabase) {
    return Response.json({ message: "Database error" }, { status: 400 });
  }
  
  const books = await prisma.books.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      author: true,
      category: true,
      price: true,
      star: true,
      downloadUrl: false,
    },
  });

  if (!books) {
    return NextResponse.json({ message: "books does not exists" }, { status: 400 });
  }
  return NextResponse.json({ books }, { status: 200 });
  // try {

  // } catch (err) {
  //   console.log(err);
  //   return Response.json({ message: err }, { status: 500 });
  // }
};
