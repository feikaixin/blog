'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const renderToHTML = app.renderToHTML;

  router.get('/', controller.home.index);
  router.get('/blog/:id', controller.home.render);
  router.get('/blog/article', controller.home.handle)
};
