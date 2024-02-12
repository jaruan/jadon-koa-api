import { koaSwagger } from 'koa2-swagger-ui';
import { Router } from 'koa-joi-router';
import { SwaggerAPI } from 'koa-joi-router-docs-v2';

export const initSwagger = (router: Router) => {
  const generator = new SwaggerAPI();
  generator.addJoiRouter(router);
  const spec = generator.generateSpec(
    {
      info: {
        title: 'Example API',
        description: 'API for creating and editing examples.',
        version: '1.0.0',
      },
    },
    {
      defaultResponses: {
        200: {
          description: 'OK',
        },
        400: {
          description: 'Bad Request',
        },
        500: {
          description: 'ERROR',
        },
      },
    },
  );

  return koaSwagger({
    routePrefix: '/docs',
    exposeSpec: true,
    swaggerOptions: {
      spec,
    },
  });
};
