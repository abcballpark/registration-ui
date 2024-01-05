import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

prisma

export const GET = async () => {
  return Response.json({ message: "Hello" });
}

export const POST = async (request: Request) => {
    const req: Prisma.RegistrantCreateInput = await request.json();
    const newRegistrant = await prisma.registrant.create({ data: req});
    return Response.json(newRegistrant);
}
