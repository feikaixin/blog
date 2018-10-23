const Router = require("koa-router");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const router = new Router();
const LRUCache = require("lru-cache");
const config = require("../config/default");
const ssrCache = new LRUCache(config.urlCache);

function getCacheKey(ctx) {
  return `${ctx.req.url}`;
}

// 进行渲染缓存
function renderAndCache(ctx, pagePath, queryParams) {
  const key = getCacheKey(ctx);

  // 合并参数
  const params = {
    ...ctx.query,
    ...ctx.params
  };

  return app
    .renderToHTML(ctx.req, ctx.res, pagePath, params)
    .then(html => {
      // Let's cache this page
      ctx.body = html;
      ssrCache.set(key, html);
    })
    .catch(err => {
      console.log("render error");
      return app.renderError(err, ctx.req, ctx.res, pagePath, params);
    });
}

app.prepare().then(() => {
  router.get('/', ctx => renderAndCache(ctx, '/'))
  router.get('/blog',ctx => {console.log('aaa'); renderAndCache(ctx,'/blog/article')});
});


module.exports = router;