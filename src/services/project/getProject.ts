import { Project } from '@prisma/client';

import prismaClient from '../../libs/prismaClient';

const prisma = prismaClient();

export default async (id: string): Promise<Project> => {
  return await prisma.project.findUnique({ where: { id } });
};
