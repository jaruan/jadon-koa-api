import { Router } from 'koa-joi-router';

declare module 'koa-joi-router-docs-v2' {
  export class SwaggerAPI {
    constructor();
    addJoiRouter(router: Router): void;
    generateSpec(baseSpec: any, options: any, renameKeys?: any): any;
  }
}
