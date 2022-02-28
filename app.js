require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');



const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', (req , res)=>{
    res.render('homePage')
})


app.get('/register', (req , res)=>{
    res.render('register')
})

app.get('/login', (req , res)=>{
    res.render('login')
})





app.listen(4000, ()=> console.log("server running on port 4000"));