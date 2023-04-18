const slugify = require('slugify')

const asyncHandler = require('express-async-handler')
const brandModel = require("../models/brandModel");
const ApiError = require('../utils/apiError')


// @desc Get List of brands
// @route Get /api/v1/brands
// @acess Public
exports. getBrands =asyncHandler ( async (req,res)=>{
    const page=req.query.page *1 || 1;
    const limit=req.query.limit *1 || 5;
    const skip=(page-1)*limit;
    const Brands = await brandModel.find({}).skip(skip).limit(limit);
    res.status(200).json({resuls:Brands.length, page ,data:Brands});
});


//@desc Get a specific brand by id
//@route Get /api/v1/brnads/:id
//@acess Public
exports. getBrand = asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const brand = await brandModel.findById(id);
    if(!brand){
        return next(new ApiError(`No brand for this Id : ${id}` ,404))
    }
    res.status(200).json({data:brand});
})


// @desc  Creat brand
// @route POST /api/v1/brands
// @acess Private 
exports. creatBrand = asyncHandler( async (req,res)=>{
    const {name} = req.body
    // async await
    const brand = await brandModel.create({name,slug:slugify(name)})
    res.status(201).json({data:brand});
});


//@desc Update Specific brand
//@route PUT /api/v1/categories/:id
//@acess Private
exports. updateBrand =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const { name }=req.body;
    console.log(name)
    const brand = await brandModel.findOneAndUpdate({_id:id},{name , slug:slugify(name)},{new:true})
    if(!brand){
        return next(new ApiError(`No brand for this id : ${id}` ,400))
    }
    res.status(200).json({data:brand});
})


//@desc Delete Specific brand
//@route DELETE /api/v1/brands/:id
//@acess Private
exports. deleteBrand =asyncHandler( async(req,res,next)=>{
    const { id }=req.params;
    const brand = await brandModel.findByIdAndDelete(id)
    if(!brand){
        return next(new ApiError(`No brand for this id : ${id}` ,400))
    }
    res.status(204).send();
})
