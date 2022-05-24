const { PrismaClient } = require("@prisma/client");
const { wordsObjects } = require("./wordsObjects");

const prisma = new PrismaClient();

async function main() {
  const data = wordsObjects.filter((word) => word.eligible);

  await prisma.$transaction(
    data.map((word) =>
      prisma.word.upsert({
        where: {
          word: word.word,
        },
        update: {
          chosenBefore: word.chosenBefore,
          wordOfTheDay: word.wordOfTheDay,
        },
        create: {
          word: word.word,
          eligible: word.eligible,
        },
      })
    )
  );
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
