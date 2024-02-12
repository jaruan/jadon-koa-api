import { Spec } from 'koa-joi-router';
import Router from 'koa-joi-router';

import getProjects from '../../handlers/project/getProjects';
import { name, pageIndex, pageSize } from './schema';

const Joi = Router.Joi;

const querySchema = Joi.object({ name, pageIndex, pageSize });

const routes: Spec = {
  meta: {
    swagger: {
      summary: 'Get project list by any criteria',
      tag: ['project'],
    },
  },
  method: 'GET',
  path: '/projects',
  validate: {
    query: querySchema,
  },
  handler: getProjects,
};

export default routes;
