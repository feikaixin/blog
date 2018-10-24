const Router = require('koa-router');
const controller = require('../controller');
const router = new Router();


// 文章列表
router.post('/api/article/list',controller.pc.articleList);





module.exports = router;