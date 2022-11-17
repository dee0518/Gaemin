const express = require('express');
const path = require('path');
const store = require('./fake_data/store');

const app = express();
const PORT = 5500;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join('index.html', { root: path.join(__dirname, 'public') }));
});

app.get('/store', (req, res) => {
  const { categoryId } = req.query;
  res.send(store.getOneStore(categoryId));
});

app.get('/storeDetail', (req, res) => {
  const { categoryId, storeId } = req.query;
  let response = store.getStoreDetail(categoryId, storeId);
  if (response) response = { categoryId: +categoryId, storeId: +storeId, ...response };
  res.send(response);
});

app.get('/menu', (req, res) => {
  const { categoryId, storeId, listId, itemId } = req.query;
  let response = store.getMenu(categoryId, storeId, listId, itemId);

  if (response)
    response = { categoryId: +categoryId, storeId: +storeId, listId: +listId, itemId: +itemId, ...response };

  res.send(response);
});

app.listen(PORT, () => console.log(`server is running ${PORT}`));
