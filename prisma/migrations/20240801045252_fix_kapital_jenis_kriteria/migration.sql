/*
  Warnings:

  - The values [cost,benefit] on the enum `JenisKriteria` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JenisKriteria_new" AS ENUM ('Cost', 'Benefit');
ALTER TABLE "Kriteria" ALTER COLUMN "jenis" TYPE "JenisKriteria_new" USING ("jenis"::text::"JenisKriteria_new");
ALTER TYPE "JenisKriteria" RENAME TO "JenisKriteria_old";
ALTER TYPE "JenisKriteria_new" RENAME TO "JenisKriteria";
DROP TYPE "JenisKriteria_old";
COMMIT;
