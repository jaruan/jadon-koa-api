import { Project } from '@prisma/client';
import { Context } from 'koa';

import updateProject from '../../services/project/updateProject';

export default async (ctx: Context): Promise<void> => {
  ctx.body = await updateProject(ctx.params.id, ctx.request.body as Project);
};
