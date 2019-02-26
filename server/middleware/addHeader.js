module.exports = async function log(ctx,next) {
  ctx.set('Access-Control-Allow-Origin', "*");
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  ctx.set('Accept','application/json'); 
  await next();
}