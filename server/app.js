'use strict';
const next = require('next');
const dev = process.env.NODE_ENV === 'production';
const nextApp = next({ dev: true });

module.exports = app => {
  app.beforeStart(async () => {
    console.log('在启动项目之前需要做的一些初始化，比如对mysql的链接，redis的链接等....');
    await nextApp.prepare();
  });
};
