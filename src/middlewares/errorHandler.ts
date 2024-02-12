import { Context, Next } from 'koa';
import { Joi } from 'koa-joi-router';

export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (err.isBoom) {
      ctx.status = err.output.statusCode;
      ctx.body = err.output.payload;
    } else if (Joi.isError(err)) {
      ctx.status = 400;
      ctx.body = {
        statusCode: 400,
        err: 'Bad Request',
        message: err.message,
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        statusCode: 500,
        error: 'Internal Server Error',
        message: err.message,
      };
    }
  }
};
