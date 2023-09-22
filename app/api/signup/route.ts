import prisma from "@/prisma"
import { connectDB } from "@/utils/connectDB"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const { name, email, password } = await req.json()

    try {
        await connectDB()
        await prisma.user.create({ data: { name, email, password }})
         
        return NextResponse.json({ message: "success" }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err }, { status: 500 })
    }
}