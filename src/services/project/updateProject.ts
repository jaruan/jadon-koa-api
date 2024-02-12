import { Project } from '@prisma/client';

import prismaClient from '../../libs/prismaClient';

const prisma = prismaClient();

export default async (id: string, project: Project): Promise<Project> => {
  return await prisma.project.update({ where: { id }, data: project });
};
