const Router = require("koa-router");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const router = new Router();
const LRUCache = require("lru-cache");
const config = require("../config/default");
const ssrCache = new LRUCache(config.urlCache);

const getCacheKey = ctx => `${ctx.req.url}`;
function renderAndCache(ctx, pagePath, queryParams) {
  const key = getCacheKey(ctx);
  // 命中缓存(存在优化点)
  if (ssrCache.has(key) && config.openUrlCache) {
    ctx.body = ssrCache.get(key);
    return;
  }
  // 合并参数
  const params = {
    ...ctx.query,
    ...ctx.params,
  };

  // eslint-disable-next-line consistent-return
  return app.renderToHTML(ctx.req, ctx.res, pagePath, params)
    .then((html) => {
      // Let's cache this page
      ctx.body = html;
      ssrCache.set(key, html);
      return 1;
    })
    .catch(err => app.renderError(err, ctx.req, ctx.res, pagePath, queryParams));
}

app.prepare().then(() => {
  router.get('/', ctx => renderAndCache(ctx, '/'));
  router.get('/blog',ctx => renderAndCache(ctx,'/blog'));
  router.get('/resume',ctx => renderAndCache(ctx,'/resume'));
  router.get('/blog/search',ctx => renderAndCache(ctx, '/blog/search'));
  router.get('/blog/:id',ctx => renderAndCache(ctx, '/blog/article'));
  router.get('/photo',ctx => renderAndCache(ctx, '/photo'));
});


module.exports = router;