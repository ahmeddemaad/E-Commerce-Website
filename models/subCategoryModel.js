const mongoose = require('mongoose')

const subCategorySchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true, 
        required:[true,"Required"],
        unique:[true,'subCategory must be unique'],
        minlength:[2,"Too short for a category name"],
        maxlength:[32,"Too long for a category name"],
    },
    slug:{
        type:String,
        lowercase:true
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref:'Category',
        required:[true,"subCategory must belong to a specific category"]
    }
},{timestamps :true})

const subCategoryModel = mongoose.model('subCategory',subCategorySchema);

module.exports =subCategoryModel;
