import { PrismaClient } from '@prisma/client';

import projectSeed from './project';

const main = async () => {
  console.log('Seeding...');
  let prisma: PrismaClient = new PrismaClient();
  try {
    await projectSeed(prisma);
    console.log('Seeding completed!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    prisma.$disconnect();
  }
};

main();
