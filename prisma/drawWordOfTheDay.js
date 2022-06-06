import prisma from "../lib/prisma";
import getWordOfTheDay from "./getWordOfTheDay";
import wordsObjects from "../prisma/wordsObjects";

async function drawWordOfTheDay() {
  if (process.env.MODE === "production") {
    const lastChosenWord = await getWordOfTheDay();

    if (lastChosenWord) {
      await prisma.word.update({
        where: {
          word: lastChosenWord.word,
        },
        data: {
          wordOfTheDay: false,
        },
      });
    }

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
  } else {
    const eligibleWords = wordsObjects.filter((word) => word.eligible);
    const randomWord =
      eligibleWords[Math.floor(Math.random() * eligibleWords.length)];

    return randomWord.word;
  }
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
