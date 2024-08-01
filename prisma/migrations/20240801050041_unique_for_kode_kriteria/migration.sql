/*
  Warnings:

  - A unique constraint covering the columns `[kode]` on the table `Kriteria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Kriteria_kode_key" ON "Kriteria"("kode");
