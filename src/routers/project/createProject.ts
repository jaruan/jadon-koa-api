import { Spec } from 'koa-joi-router';
import Router from 'koa-joi-router';

import createProject from '../../handlers/project/createProject';
import { name, status } from './schema';

const Joi = Router.Joi;

const bodySchema = Joi.object({ name, status });

const routes: Spec = {
  meta: {
    swagger: {
      summary: 'Create a project',
      tag: ['project'],
    },
  },
  method: 'POST',
  path: '/projects',
  validate: {
    type: 'json',
    body: bodySchema,
  },
  handler: createProject,
};

export default routes;
