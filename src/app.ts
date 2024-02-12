import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { errorHandler } from './middlewares/errorHandler';
import { healthCheck } from './middlewares/healthCheck';
import { initSwagger } from './middlewares/swagger';
import router from './routers';

dotenv.config({ path: '.env' });

export const initializeApp = async () => {
  const app = new Koa();

  app.use(errorHandler);

  app.use(bodyParser());

  const route = router();

  ['development', 'qa', 'test'].includes(process.env.NODE_ENV) && app.use(initSwagger(route));

  app.use(route.middleware());

  app.use(healthCheck(route));

  console.log('The environment variable ACTION_TYPE is ' + process.env.ACTION_TYPE);

  return app;
};
