const express = require('express');
const store = require('./fake_data/store');

const app = express();
const PORT = 5500;

app.use(express.static('public'));
app.use(express.json());

app.get('/store', (req, res) => {
  const { storeId } = req.query;
  res.send(store.getOneStore(storeId));
});

app.get('/storeDetail', (req, res) => {
  const { storeId, detailId } = req.query;
  res.send(store.getStoreDetail(storeId, detailId));
});

app.get('/menu', (req, res) => {
  const { storeId, detailId, categoryId, itemId } = req.query;
  res.send(store.getMenu(storeId, detailId, categoryId, itemId));
});

app.listen(PORT, () => console.log(`server is running ${PORT}`));
