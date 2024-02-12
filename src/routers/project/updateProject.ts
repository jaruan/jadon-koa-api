import { Spec } from 'koa-joi-router';
import Router from 'koa-joi-router';

import updateProject from '../../handlers/project/updateProject';
import { id, name, status } from './schema';

const Joi = Router.Joi;

const paramsSchema = Joi.object({ id });

const bodySchema = Joi.object({ id, name, status });

const routes: Spec = {
  meta: {
    swagger: {
      summary: 'Update a project',
      tag: ['project'],
    },
  },
  method: 'PUT',
  path: '/projects/:id',
  validate: {
    type: 'json',
    params: paramsSchema,
    body: bodySchema,
  },
  handler: updateProject,
};

export default routes;
