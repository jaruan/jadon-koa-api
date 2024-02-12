import { Context, Next } from 'koa';
import { Router } from 'koa-joi-router';

export const healthCheck = (router: Router) => {
  router.get('/health-check', async (cxt: Context) => {
    cxt.body = {
      status: 'OK',
      actionType: process.env.ACTION_TYPE,
    };
  });
  return router.middleware();
};
