const Router = require('koa-router');
const controller = require('../controller');
const router = new Router();


// 文章列表
router.post('/api/article/list',controller.pc.articleList);
router.post('/api/article/detail/:id',controller.pc.articleDetail);
router.post('/api/article/search',controller.pc.articleSearch);





module.exports = router;