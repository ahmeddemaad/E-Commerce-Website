const slugify = require('slugify')

const asyncHandler = require('express-async-handler')
const categoryModel = require("../models/categoryModel");
const ApiError = require('../utils/apiError')


// @desc Get List of Categories
// @route Get /api/v1/categories
// @acess Public
exports. getCategories =asyncHandler ( async (req,res)=>{
    const page=req.query.page *1 || 1;
    const limit=req.query.limit *1 || 5;
    const skip=(page-1)*limit;
    const categories = await categoryModel.find({}).skip(skip).limit(limit);
    res.status(200).json({resuls:categories.length, page ,data:categories});
});


//@desc Get a specific category by id
//@route Get /api/v1/categories/:id
//@acess Public
exports. getCategory = asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const category = await categoryModel.findById(id);
    if(!category){
        return next(new ApiError(`No Category for this Id : ${id}` ,404))
    }
    res.status(200).json({data:category});
})


// @desc  Creat Category
// @route POST /api/v1/categories
// @acess Private 
exports. creatCategories = asyncHandler( async (req,res)=>{
    const {name} = req.body
    // async await
    const category = await categoryModel.create({name,slug:slugify(name)})
    res.status(201).json({data:category});
});


//@desc Update Specific Category
//@route PUT /api/v1/categories/:id
//@acess Private
exports. updateCategory =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const { name }=req.body;
    console.log(name)
    const category = await categoryModel.findOneAndUpdate({_id:id},{name , slug:slugify(name)},{new:true})
    if(!category){
        return next(new ApiError(`No Category for this id : ${id}` ,400))
    }
    res.status(200).json({data:category});
})


//@desc Delete Specific Category
//@route DELETE /api/v1/categories/:id
//@acess Private
exports. deleteCategory =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const category = await categoryModel.findByIdAndDelete(id)
    if(!category){
        return next(new ApiError(`No Category for this id : ${id}` ,400))
    }
    res.status(204).send();
})
