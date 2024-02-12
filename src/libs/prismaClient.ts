import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export default () => {
  return prisma || (prisma = new PrismaClient());
};
