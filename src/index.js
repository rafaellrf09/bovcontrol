const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database')

const app = express();

mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("Mongo conectado")).catch(err => console.log(err))

app.use(bodyParser.json())
app.use(routes);
app.listen(3333)
console.log(`Servidor conectado na porta 3333`);