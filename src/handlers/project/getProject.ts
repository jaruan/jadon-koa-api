import { Context } from 'koa';

import getProject from '../../services/project/getProject';

export default async (ctx: Context): Promise<void> => {
  const project = await getProject(ctx.params.id);
};
