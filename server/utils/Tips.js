module.exports = {
  ok: {
    code: 10001,
    msg: '请求成功',
  },
  error: {
    code: 20001,
    data: null,
    msg: '请求失败',
  },
  datebaseError: {
    code: 20002,
    data: null,
    msg: '服务器错误',
  },
  paramError: {
    code: 20003,
    data: null,
    msg: '参数错误'
  },
  passwordError: {
    code: 20004,
    data: null,
    msg: '账号密码错误',
  },
  noLogin: {
    code: 20005,
    data: null,
    msg: '未登录'
  }
}