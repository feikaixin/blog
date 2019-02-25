module.exports = async function log(ctx,next) {
  ctx.set('Access-Control-Allow-Origin', "*");
  await next();
}