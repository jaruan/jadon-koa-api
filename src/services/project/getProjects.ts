import { Project } from '@prisma/client';

import prismaClient from '../../libs/prismaClient';

const prisma = prismaClient();

export default async (
  name: string,
  pageIndex: number,
  pageSize: number,
): Promise<{ total: number; projects: Project[] }> => {
  const [total, projects] = await prisma.$transaction([
    prisma.project.count({ where: { name } }),
    prisma.project.findMany({ where: { name }, skip: pageIndex * pageSize, take: pageSize }),
  ]);

  return { total, projects };
};
