// core modules
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({path:'config.env'})

// myown modules
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');

//database connection
dbConnection();

// express apps
const app = express();

// middle wares
app.use(express.json()) //used for parsing

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
    console.log(`mode:${process.env.NODE_ENV}`)
}

//Routes
app.use('/api/v1/categories',categoryRoute);

//Listening Request
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})
