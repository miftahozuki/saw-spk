-- CreateTable
CREATE TABLE "subKriteria" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nilai" INTEGER NOT NULL,
    "kriteriaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subKriteria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subKriteria" ADD CONSTRAINT "subKriteria_kriteriaId_fkey" FOREIGN KEY ("kriteriaId") REFERENCES "Kriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
