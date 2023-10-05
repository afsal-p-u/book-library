import prisma from "@/prisma";

export const connectDB = async () => {
  await prisma.$connect().then((res) => {
    console.log(res)
    return true
  }).catch((err) => {
    console.log(err)
    return false
  })
  return true
};
