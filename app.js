require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');



const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD)).then(()=> console.log('connected successfully'));

const ItemSchema = mongoose.Schema({
    name:String,
    image_url:String,
    price:Number,
    description:String,
    brand:String,
    type:String,
    sizes:String
})

const Item = new mongoose.model('Item', ItemSchema);

app.get('/', (req , res)=>{
    res.render('homePage')
})

app.get('/type/:type', (req , res)=>{
    const type = req.params.type;
    Item.find({type: type}, (err, founded)=> {
        if(!err){
            res.render('type', {collection: founded})
        }else{
        console.log(err)
        }
    })
    
})

app.get('/brand/:brandName', (req , res)=>{
    const brandName = req.params.brandName
    res.send(`NO PRODUCT OF ${brandName} YET.`)
})

app.get('/register', (req , res)=>{
    res.render('register')
})

app.get('/login', (req , res)=>{
    res.render('login')
})

 



app.listen(4000, ()=> console.log("server running on port 4000"));