// core modules
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({path:'config.env'})

//myown modules
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');
const ApiError = require('./utils/apiError')
const globalError = require('./middlewares/errorMiddleware')

//database connection
dbConnection();

// express apps
const app = express();

//parsing middlewares
app.use(express.json())

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
    console.log(`mode:${process.env.NODE_ENV}`)
};

//Mouting Routes
app.use('/api/v1/categories',categoryRoute);

app.all('*',(req,res,next)=>{
    next(new ApiError(`cant find this route ${req.originalUrl}`,400))
});

//Global Error Handling middleware
app.use(globalError)

//Listening Request
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})
