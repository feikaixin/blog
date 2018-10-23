const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const config = require("./config/default");
const port = parseInt(process.env.PORT, 10) || config.port;
const Koa = require("koa");
const mysql = require("./db");
const koaBody = require("koa-body");
const KoaSession = require("koa-session");
const routers = require("./router/index");
app.prepare().then(() => {
  const server = new Koa();
  server.keys = ["some sercert hahaha"];
  server.use(koaBody());

  // 添加相关路由
  routers.map(item => {
    server.use(item.routes());
  });

  // 挂载数据库对象
  server.use(async (ctx, next) => {
    ctx.mysql = mysql;
    await next();
  });

  // 静态资源渲染
  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(port, err => {
    if (err) throw err;
  });
});
