import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const article1 = await prisma.article.create({
        data: {
            title: 'Premier article',
            author: 'Jean Dupont',
            content: 'Ceci est le contenu du premier article.'
        }
    });

    console.log('Article créé:', article1);

    const article2 = await prisma.article.create({
        data: {
            title: 'Deuxième article',
            author: 'Marie Curie',
            content: 'Ceci est le contenu du deuxième article.'
        }
    });

    console.log('Article créé:', article2);
}

main()
    .catch((e) => console.log(e));