-- CreateEnum
CREATE TYPE "JenisKriteria" AS ENUM ('cost', 'benefit');

-- CreateTable
CREATE TABLE "Kriteria" (
    "id" SERIAL NOT NULL,
    "kode" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "bobot" INTEGER NOT NULL,
    "jenis" "JenisKriteria" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kriteria_pkey" PRIMARY KEY ("id")
);
