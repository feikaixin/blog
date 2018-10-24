const service = require("../../service");
const Tips = require("../../utils/Tips");

module.exports = {
  // 文章列表接口
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
  }
};
