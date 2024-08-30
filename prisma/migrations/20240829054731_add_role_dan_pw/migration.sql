-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT,
ADD COLUMN     "role" "UserRole" DEFAULT 'Admin';
