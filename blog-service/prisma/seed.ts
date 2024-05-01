import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user

}

main()
    .catch((e) => console.log(e))
    .finally(() => prisma.$disconect());