/*
  Warnings:

  - The primary key for the `Penilaian` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Penilaian_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Penilaian_id_seq";
