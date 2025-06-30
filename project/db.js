const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'ecommerce'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL 연결 성공!');
});

module.exports = db;
