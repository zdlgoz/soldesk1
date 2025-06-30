const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/user', userRoutes);
app.use('/api/cart', cartRoutes);

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
