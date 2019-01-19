const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  mysql: {
    host: '106.14.209.107',
    user: 'root',
    password: 'kaixin123',
    database: 'blog',
    HOST: 'localhost',
  },
  // 进行缓存优化
  urlCache: {
    max: 100,    //  ???
    maxAge: 1000 * 60 * 60 // 1hour
  },
  apiCache: {
    maxAge: 1000*3,
    isOpen: true
  },
  // 日志文件配置
  // http://www.wangweilin.net/static/pages/log4js-node.html
  // https://juejin.im/post/57b962af7db2a200542a0fb3
  logger: {
    "appenders": {
      "console": {
        "type": "console"
      },
      "trace": {
        "type": "dateFile",
        "filename": "./logs/access-",
        "pattern": ".yyyy-MM-dd.log",
        "alwaysIncludePattern": true,
        "maxLogSize ": 31457280
      },
      "http": {
        "type": "logLevelFilter",
        "appender": "trace",
        "level": "trace",
        "maxLevel": "trace"
      },
      "info": {
        "type": "dateFile",
        "filename": "./logs/info-",
        "encoding": "utf-8",
        "pattern": ".yyyy-MM-dd.log",
        "maxLogSize": 10000000,
        "alwaysIncludePattern": true,
        "layout": {
          "type": "pattern",
          "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
        },
        "compress": true
      },
      "maxInfo": {
        "type": "logLevelFilter",
        "appender": "info",
        "level": "debug",
        "maxLevel": "error"
      },
      "error": {
        "type": "dateFile",
        "filename": "./logs/error-",
        "pattern": ".yyyy-MM-dd.log",
        "maxLogSize": 10000000,
        "encoding": "utf-8",
        "alwaysIncludePattern": true,
        "layout": {
          "type": "pattern",
          "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
        },
        "compress": true
      },
      "minError": {
        "type": "logLevelFilter",
        "appender": "error",
        "level": "error"
      }
    },
    "categories": {
      "default": {
        "appenders": [
          "console",
          "http",
          "maxInfo",
          "minError"
        ],
        "level": "all"
      }
    }
  }
}

module.exports = config;