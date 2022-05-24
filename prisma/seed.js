const { PrismaClient } = require("@prisma/client");
const { wordsObjects } = require("./wordsObjects");

const prisma = new PrismaClient();

async function main() {
  for (let word of wordsObjects) {
    if (word.eligible) {
      await prisma.word.create({
        data: word,
      });
    }
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
