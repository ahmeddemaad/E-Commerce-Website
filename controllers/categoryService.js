const category = require("../models/categoryModel");
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')

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
//@route Get /api/v1/categories/id
//@acess Public
exports. getCategory = asyncHandler( async(req,res)=>{
    const { id }=req.params;
    const category = await category.findById(id);
    if(!category){
        res.status(400).json({msg:`No Category for this id : ${id}`});
    }
    res.status(200).json({data:category});
})


// @desc  Creat Category
// @route POST /api/v1/categories
// @acess Private 
exports. creatCategories = asyncHandler( async (req,res)=>{
    const name=req.body.name;
    // async await
    const category = await category.create({name,slug:slugify(name)})
    res.status(201).json({data:category});
});