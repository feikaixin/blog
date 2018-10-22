'use strict';

const Controller = require('egg').Controller;

const next = require('next');
const dev = process.env.NODE_ENV === 'production';
const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async render() {
    const { params } = this.ctx;
    // <WithLink href='/blog/article' as={`/blog/${data.article_id}`}>
    const { req, res} = this.ctx;
    await nextApp.prepare()
      .then(() => nextApp.renderToHTML(req, res, '/blog', {}))
      .then(html => {
        this.ctx.body = html;
        console.log(html)
      })
  }

  async handle() {
    const { params } = this.ctx;
    const { req, res} = this.ctx;
    console.log(req);
    await nextApp.prepare()
      .then(() => nextApp.renderToHTML(req, res, '/blog/article'))
      .then(html => {
        this.ctx.body = html;
      })    
  }
}



module.exports = HomeController;
