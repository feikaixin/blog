// 文章

const mysql = require('../../db');
async function getArticle(params) {
  let sql = `SELECT * FROM artical`;
  // 统计总数的sql语句
  let count = `SELECT COUNT(*) FROM artical`;
  let result = {};
  try {
    let [data,pageNum] = await Promise.all([mysql.query(sql),mysql.query(count)]);
  } catch (error) {
    
  }



  result = {
    pagination: {
      page,
      pageNum:10,
    },
    list:data
  }
  
}


module.exports = {
  getArticle,
}