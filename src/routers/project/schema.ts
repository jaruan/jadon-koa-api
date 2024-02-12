import Router from 'koa-joi-router';

const Joi = Router.Joi;

export const id = Joi.number().integer().required().description('Project id');

export const name = Joi.string().min(5).max(80).optional().description('Project name');

export const status = Joi.number().integer().min(0).max(1).description('Project status');

export const pageIndex = Joi.number().integer().min(0).default(0).optional().description('Page index. Start from 0');

export const pageSize = Joi.number().integer().min(1).max(100).default(20).optional().description('Page size');
