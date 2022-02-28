const express = require('express');
const ejs = require('ejs');
const app = express();


app.use('/public',express.static(__dirname + '/public'));//静态文件托管
app.set('view engine','ejs');

app.use('/',require('./router/index'));

app.listen(3000);
