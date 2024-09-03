-- DropForeignKey
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_alternatifId_fkey";

-- DropForeignKey
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_subkriteriaId_fkey";

-- DropForeignKey
ALTER TABLE "subKriteria" DROP CONSTRAINT "subKriteria_kriteriaId_fkey";

-- AddForeignKey
ALTER TABLE "subKriteria" ADD CONSTRAINT "subKriteria_kriteriaId_fkey" FOREIGN KEY ("kriteriaId") REFERENCES "Kriteria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_subkriteriaId_fkey" FOREIGN KEY ("subkriteriaId") REFERENCES "subKriteria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_alternatifId_fkey" FOREIGN KEY ("alternatifId") REFERENCES "Alternatif"("id") ON DELETE CASCADE ON UPDATE CASCADE;
