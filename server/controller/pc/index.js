const service = require("../../service");
const Tips = require("../../utils/Tips");
const Cache = require('../../utils/Cache');

module.exports = {
  async articleList(ctx, next) {
    const { page } = ctx.request.body;
    let data = null;
    try {
      data = await service.pc.getArticle({ page });
      ctx.body = {
        ...Tips.ok,
        data
      }
    } catch (e){
      ctx.logger.error(ctx.url,ctx.request.body,e);
      ctx.body = Tips.datebaseError;
    }
  },
  async articleDetail(ctx, next) {
    const { id } = ctx.params;
    let data = null;
    try {
      data = await service.pc.getDetail({id});
      ctx.body = {
        ...Tips.ok,
        data
      }
    } catch (error) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  }
};
