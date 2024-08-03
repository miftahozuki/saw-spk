-- CreateTable
CREATE TABLE "Penilaian" (
    "id" SERIAL NOT NULL,
    "kriteriaId" INTEGER NOT NULL,
    "alternatifId" INTEGER NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Penilaian_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_kriteriaId_fkey" FOREIGN KEY ("kriteriaId") REFERENCES "Kriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_alternatifId_fkey" FOREIGN KEY ("alternatifId") REFERENCES "Alternatif"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
