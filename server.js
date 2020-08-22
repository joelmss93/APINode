const express = require('express');
const mongoose =  require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//inciiando o banco mongodb

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', 
{useNewUrlParser: true, useUnifiedTopology:true}
);

requireDir('./src/models');
//const Product = mongoose.model('Product');

//rotas
app.use('/api', require('./src/routes'));


app.listen(3001);