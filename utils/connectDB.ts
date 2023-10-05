import prisma from "@/prisma";

export const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log('DB connected successfully')
        return true
    } catch (err) {
        console.log("Error connectiong DB")
        return false
    }
}