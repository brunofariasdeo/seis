import prisma from "../lib/prisma";

async function getWordOfTheDay() {
  const word = await prisma.word.findFirst({
    where: {
      wordOfTheDay: true,
    },
  });

  return word;
}

export default getWordOfTheDay;
