/*
  Warnings:

  - Added the required column `subkriteriaId` to the `Penilaian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Penilaian" ADD COLUMN     "subkriteriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_subkriteriaId_fkey" FOREIGN KEY ("subkriteriaId") REFERENCES "subKriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
