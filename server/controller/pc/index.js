const service = require("../../service");
const Tips = require("../../utils/Tips");
const { apiCache } = require('../../config/default');
const Cache = require('../../utils/Cache');
const cache = Cache.createCache(apiCache);
const getArticleCache = cache(service.pc.getArticle);
const getArticalDetail = cache(service.pc.getDetail);
const getArticleSearch = cache(service.pc.getSearch);
module.exports = {
  async articleList(ctx, next) {
    const { page } = ctx.request.body;
    let data = null;
    try {
      data = await getArticleCache({ page });
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
      data = await getArticalDetail({id});
      ctx.body = {
        ...Tips.ok,
        data
      }
    } catch (error) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tips.datebaseError;
    }
  },
  async articleSearch(ctx, next) {
    const { search } = ctx.request.body;
    let data = null;
    try {
      data = await getArticleSearch({search});
      ctx.body = {
        ...Tips.ok,
        data
      }
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tips.datebaseError;
    }
  }
};
