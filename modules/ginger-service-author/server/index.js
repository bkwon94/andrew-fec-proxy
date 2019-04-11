const express = require('express');

const app = express();
const cors = require('cors');
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id', express.static(path.join(__dirname, '../public')));

app.get('/books/:id/authors/:id', async (req, res) => {
  const author = await db.getAuthor(req.params.id);
  res.json(author);
});

app.get('/books/:id/authors/:id/titles', async (req, res) => {
  const books = await db.getAuthorTitles(req.params.id);
  res.json(books);
});

app.post('/books/:id/authors/status', async (req, res) => {
  const status = await db.updateStatus(req.body.status, req.body.id);
  res.send(status);
});

app.listen(port, () => console.log(`listening on port ${port}!`));