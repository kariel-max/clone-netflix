const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const mustache = require('mustache-express')
const app = express();
const dotenv = require("dotenv")
const path = require('path')

const mainRoutes = require('./routes/index');

dotenv.config();
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret: 'sua-chave-secreta'}));
app.engine('mustache', mustache());
app.use('public', express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))


app.use('/', mainRoutes)

app.listen(process.env.PORT, ()=> {
    console.log("o servido estar funciomando", process.env.PORT)
})