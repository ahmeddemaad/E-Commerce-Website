const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const productModel = require("../models/productModel");
const ApiError = require('../utils/apiError')


// @desc Get List of products
// @route Get /api/v1/products
// @acess Public
exports. getProducts =asyncHandler ( async (req,res)=>{
    const page=req.query.page *1 || 1;
    const limit=req.query.limit *1 || 5;
    const skip=(page-1)*limit;
    const products = await productModel.find({}).skip(skip).limit(limit);
    res.status(200).json({resuls:products.length, page ,data:products});
});


//@desc Get a specific product by id
//@route Get /api/v1/products/:id
//@acess Public
exports. getProduct = asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const product = await productModel.findById(id);
    if(!product){
        return next(new ApiError(`No product for this Id : ${id}` ,404))
    }
    res.status(200).json({data:product});
})


// @desc  Creat product
// @route POST /api/v1/products
// @acess Private 
exports. creatProducts = asyncHandler( async (req,res)=>{
    req.body.slug = slugify(req.body.title);
    // async await
    const product = await productModel.create(req.body)
    res.status(201).json({data:product});
});


//@desc Update Specific product
//@route PUT /api/v1/products/:id
//@acess Private
exports. updateProduct =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    req.body.slug = slugify(req.body.title);
    const product = await productModel.findOneAndUpdate({_id:id},req.body,{new:true})
    if(!product){
        return next(new ApiError(`No product for this id : ${id}` ,400))
    }
    res.status(200).json({data:product});
})


//@desc Delete Specific product
//@route DELETE /api/v1/products/:id
//@acess Private
exports. deleteProduct =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const product = await productModel.findByIdAndDelete(id)
    if(!product){
        return next(new ApiError(`No product for this id : ${id}` ,400))
    }
    res.status(204).send();
})
