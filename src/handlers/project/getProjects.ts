import { Context } from 'koa';

import getProjects from '../../services/project/getProjects';

export default async (ctx: Context): Promise<void> => {
  ctx.body = await getProjects(ctx.query.name?.[0], +ctx.query.pageIndex, +ctx.query.pageSize);
};
