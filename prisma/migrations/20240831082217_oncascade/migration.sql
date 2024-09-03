-- DropForeignKey
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_kriteriaId_fkey";

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_kriteriaId_fkey" FOREIGN KEY ("kriteriaId") REFERENCES "Kriteria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
