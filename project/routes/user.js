const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.query(
    'INSERT INTO users (username, password_hash, email) VALUES (?, ?, ?)',
    [username, hash, email],
    (err, result) => {
      if (err) return res.status(500).send('에러');
      res.send('회원가입 성공');
    }
  );
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(400).send('존재하지 않는 사용자');
    const isMatch = await bcrypt.compare(password, results[0].password_hash);
    if (!isMatch) return res.status(401).send('비밀번호 틀림');
    res.send('로그인 성공');
  });
});

module.exports = router;
