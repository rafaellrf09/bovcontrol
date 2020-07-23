const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/projectBov', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("Mongo conectado")).catch(err => console.log(err))

app.use(bodyParser.json())
app.use(routes);
app.listen(3333)
console.log(`Servidor conectado na porta 3333`);