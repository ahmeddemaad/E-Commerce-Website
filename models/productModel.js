const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,"You are required to provide a title for product"],
        trim:true,
        minlength:[3,"too short"],
        maxlength:[32,"too long"],
    },
    slug:{
        type: String,
        required: [true,"You are required to provide a slug for product"],
        lowercase:true,
    },
    description:{
        type: String,
        required: [true,"You are required to provide a description for product "],
        minlength:  [20,"too short product Description "],
    },
    quantity:{
        type: Number,
        required: [true,"You are required to provide a quantity for product"]
    },
    sold:{
        type:Number,
        default: 0,
    },
    price:{
        type:Number,
        required: [true,"You are required to provide a price for product"],
        trim:true,
        max: [20," too long product Price"],
    },
    princeAfterDiscount:{
        type:Number,
    },
    color:{
        type:[String],
    },
    image:{
        type:[String],
    },
    imageCover:{
        type:String,
        required: [true,"You are required to provide a cover for image for product"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required: [true,"You are required to provide a category for product "]
    },
    subcategory:[{
        type:mongoose.Schema.ObjectId,
        ref:"subCategory",
    }],
    brand:{
        type:mongoose.Schema.ObjectId,
        ref:"Brand",
    },
    ratingsAvg:{
        type:Number,
        min:[1,"Rating must not be lower than 1.0"],
        max:[5,"Rating must not be Higher than 5.0"],
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
},{timestamps:true});

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;