const config = require('../config/default');
const mysql = require('mysql');
const pool = mysql.createPool(config.mysql);

const query = (sql,values) => {
  return new Promise((resolve,reject) => {
    pool.getConnection((err,connection) => {
      if(err){
        reject(err);
      }else{
        connection.query(sql,values,(err,rows) => {
          if(err){
            reject(err);
          }else{
            resolve(rows)
          }
          connection.release();
        })
      }
    })
  })
}

module.exports = {
  query,
}