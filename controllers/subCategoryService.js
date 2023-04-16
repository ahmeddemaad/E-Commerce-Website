const slugify = require('slugify')

const asyncHandler = require('express-async-handler')
const ApiError = require('../utils/apiError')
const subCategoryModel = require("../models/subCategoryModel");

// @desc Get List of SubCategories
// @route Get /api/v1/subcategories
// @acess Public
exports. getSubCategories =asyncHandler ( async (req,res)=>{
    const page=req.query.page *1 || 1;
    const limit=req.query.limit *1 || 5;
    const skip=(page-1)*limit;
    const SubCategories = await subCategoryModel.find({}).skip(skip).limit(limit);
    res.status(200).json({resuls:SubCategories.length, page ,data:SubCategories});
});

//@desc Get a specific subcategory by id
//@route Get /api/v1/subcategories/:id
//@acess Public
exports. getSubCategory = asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const subCategory = await subCategoryModel.findById(id);
    if(!subCategory){
        return next(new ApiError(`No subCategory for this Id : ${id}` ,404))
    }
    res.status(200).json({data:subCategory});
})

// @desc  Creat subCategory
// @route POST /api/v1/subcategories
// @acess Private 
exports. creatSubCategories = asyncHandler( async (req,res)=>{
    const {name , category} = req.body
    // async await
    const subCategory = await subCategoryModel.create({name,slug:slugify(name),category})
    res.status(201).json({data:subCategory});
});

//@desc Update Specific Category
//@route PUT /api/v1/subcategories/:id
//@acess Private
exports. updateSubCategory =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const { name ,category}=req.body;
    console.log(name)
    const subCategory = await subCategoryModel.findOneAndUpdate({_id:id},{name , slug:slugify(name),category},{new:true})
    if(!subCategory){
        return next(new ApiError(`No subCategory for this id : ${id}` ,400))
    }
    res.status(200).json({data:subCategory});
})


//@desc Delete Specific Category
//@route DELETE /api/v1/subcategories/:id
//@acess Private
exports. deleteSubCategory =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const subCategory = await subCategoryModel.findByIdAndDelete(id)
    if(!subCategory){
        return next(new ApiError(`No subCategory for this id : ${id}` ,400))
    }
    res.status(204).send();
})



