const express =require('express');
const morgan=require('morgan');
const app=express();
//Settings
app.set('port',process.env.PORT||3300);
app.set('view engine','ejs');
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(require('./routes/movies.routes'));
module.exports=app;
