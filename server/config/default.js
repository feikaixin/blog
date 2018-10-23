const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  mysql: {
    host: '106.14.209.107',
    user: 'root',
    password: '',
    database: 'blog',
    HOST: 'localhost',
  },
  // 进行缓存优化
  urlCache: {
    max: 100,    //  ???
    maxAge: 1000 * 60 * 60 // 1hour
  }
}

module.exports = config;