// 文章

const mysql = require("../../db");
const { unescapeHtml } = require('../../utils/escapeHtml');
async function getArticle({ page = 1,id }, hasContent = false) {
  let sql = `SELECT title, update_time, ${hasContent?'content,':''} description, id as article_id FROM artical ${id?`WHERE id = ${id}`:''} LIMIT ${(page - 1) * 10},10`;
  // 统计总数的sql语句
  let count = `SELECT COUNT(*) FROM artical`;
  let result = {};
  try {
    let [data, pageNum] = await Promise.all([
      mysql.query(sql),
      mysql.query(count)
    ]);
    // 文章转码
    if(hasContent) {
      for(let i=0; i<data.length; i++) {
        if(data[i].content) {
          data[i].content = unescapeHtml(data[i].content);
        }
      }
    }
    result = {
      pagination: {
        page,
        pageNum: pageNum[0]['COUNT(*)']
      },
      list: data
    };
  } catch (error) {
    throw error;
  }
  return result;
}

async function  getDetail({id}) {
  const data = await getArticle({ id }, true);
  return data.list[0] || null;
}

module.exports = {
  getArticle,
  getDetail
};
