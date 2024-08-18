-- DropForeignKey
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_subkriteriaId_fkey";

-- AlterTable
ALTER TABLE "Penilaian" ALTER COLUMN "nilai" DROP NOT NULL,
ALTER COLUMN "subkriteriaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_subkriteriaId_fkey" FOREIGN KEY ("subkriteriaId") REFERENCES "subKriteria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
