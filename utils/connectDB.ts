import prisma from "@/prisma";

export const connectDB = async () => {
    await prisma.$connect().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}