/*
  Warnings:

  - You are about to drop the column `chosen` on the `Word` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Word" DROP COLUMN "chosen",
ADD COLUMN     "chosenBefore" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "wordOfTheDay" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "eligible" SET DEFAULT false;
