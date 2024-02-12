import { Project } from '@prisma/client';

import prismaClient from '../../libs/prismaClient';

const prisma = prismaClient();

export default async (project: Project): Promise<Project> => {
  return await prisma.project.create({ data: project });
};
