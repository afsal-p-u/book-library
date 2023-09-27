import prisma from "@/prisma"
import { connectDB } from "@/utils/connectDB"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const { title, author, image, category, price, star } = await req.json()

    try {
        await connectDB()
        await prisma.books.create({ data: { title, author, image, category, price, star }})
         
        return NextResponse.json({ message: "success" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        await connectDB()
        const books = await prisma.books.findMany()
         
        return NextResponse.json({ books }, { status: 200 })
    } catch (err) {
        console.log(err)
        return Response.json({ message: err }, { status: 500 })
    }
}