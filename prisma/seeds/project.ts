import { Prisma, PrismaClient, Project } from '@prisma/client';

const projectSeeds: Prisma.ProjectCreateInput[] = [
  { name: 'project 1', status: 1, createdBy: 'test' },
  { name: 'project 2', status: 1, createdBy: 'test' },
  { name: 'project 3', status: 0, createdBy: 'test' },
];

const getStoreSeeds = (projects: Project[]): Prisma.StoreCreateInput[] => {
  return [
    { name: 'store 1', status: 1, project: { connect: { id: projects[0].id } }, createdBy: 'test' },
    { name: 'store 2', status: 1, project: { connect: { id: projects[0].id } }, createdBy: 'test' },
    { name: 'store 3', status: 1, project: { connect: { id: projects[1].id } }, createdBy: 'test' },
    { name: 'store 4', status: 0, project: { connect: { id: projects[2].id } }, createdBy: 'test' },
  ];
};

export default async (prisma: PrismaClient) => {
  const projects = await prisma.$transaction(
    projectSeeds.map((projectSeed) => prisma.project.create({ data: projectSeed })),
  );
  await prisma.$transaction(getStoreSeeds(projects).map((storeSeed) => prisma.store.create({ data: storeSeed })));
};
