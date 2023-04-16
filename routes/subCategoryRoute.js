const express = require('express');
const {creatSubCategories , getSubCategory , getSubCategories , deleteSubCategory, updateSubCategory}=require('../controllers/subCategoryService')
const {createSubCategoryValidator , getSubCategoryValidator , updateSubCategoryValidator , deleteSubCategoryValidator} = require('../utils/validators/subCategoryValidator')

const router = express.Router();

router.route('/')
            .post(createSubCategoryValidator,creatSubCategories)
            .get(getSubCategories)

router.route('/:id')
            //@desc (validator,category service)
            .get( getSubCategoryValidator , getSubCategory)
            .put(updateSubCategoryValidator,updateSubCategory)
            .delete(deleteSubCategoryValidator,deleteSubCategory)

module.exports=router;