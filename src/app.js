const fs = require('fs') ;// library to allow read and write

const path = require('path'); // to set path

const express = require('express');


const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine' , 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=> res.render('index', {title:'Index'}))


app.listen(3000,()=>console.log("Ps Project"))
