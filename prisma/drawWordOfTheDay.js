import prisma from "../lib/prisma";

async function drawWordOfTheDay() {
  const eligibleWords = await prisma.word.findMany({
    where: {
      chosenBefore: false,
      eligible: true,
    },
  });

  const wordOfTheDay =
    eligibleWords[Math.floor(Math.random() * eligibleWords.length)];

  await prisma.word.update({
    where: {
      word: wordOfTheDay.word,
    },
    data: {
      chosenBefore: true,
      wordOfTheDay: true,
    },
  });

  return wordOfTheDay.word;
}

drawWordOfTheDay()
  .then((data) => console.log("The word of the day is", data))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Disconnecting Prisma");
    prisma.$disconnect();
  });
