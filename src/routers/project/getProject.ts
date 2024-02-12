import { Spec } from 'koa-joi-router';
import Router from 'koa-joi-router';

import getProject from '../../handlers/project/getProject';
import { id } from './schema';

const Joi = Router.Joi;

const paramsSchema = Joi.object({ id });

const routes: Spec = {
  meta: {
    swagger: {
      summary: 'Get a project by Id',
      tag: ['project'],
    },
  },
  method: 'GET',
  path: '/projects/:id',
  validate: {
    params: paramsSchema,
  },
  handler: getProject,
};

export default routes;
