import { globSync } from 'glob';
import Router from 'koa-joi-router';
import { join } from 'path';

export default () => {
  const router = Router();
  const dir = join(__dirname, './**');
  const routes = globSync(`${dir}/*.{ts,js}`, { ignore: [`${dir}/index.{ts,js}`, `${dir}/schema.{ts,js}`] });
  routes.forEach((routePath) => {
    router.route(require(routePath).default);
  });
  return router;
};
