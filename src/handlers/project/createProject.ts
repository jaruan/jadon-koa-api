import { Project } from '@prisma/client';
import { Context } from 'koa';

import createProject from '../../services/project/createProject';

export default async (ctx: Context): Promise<void> => {
  const newProject = await createProject(ctx.request.body as Project);
  ctx.body = newProject;
};
