const express = require('express');
const app = express();
// Data
const phones = require('./phones.json')


const PORT = 5000;

app.use(express.json());

app.get('/phones', (request, response) => {
  console.log('/phones');
  response.status(200).send(phones);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))