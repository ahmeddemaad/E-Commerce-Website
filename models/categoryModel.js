const mongoose = require('mongoose')

//1-Creat Schema
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Required"],
        unique:true,
        minlength:[3,"Too short for a category name"],
        maxlength:[32,"Too long for a category name"],
    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,
},{timestamps: true});
//2-Creat model
const categoryModel = mongoose.model('Category',categorySchema);

module.exports =categoryModel;
