const express = require('express');
const {getCategories , getCategory ,creatCategories ,updateCategory ,deleteCategory}=require('../controllers/categoryService')
const {getCategoryValidator , createCategoryValidator ,updateCategoryValidator,deleteCategoryValidator} = require('../utils/validators/categoryValidator')
const subCategoriesRoutes = require('./subCategoryRoute')

const router = express.Router();

router.use('/:categoryId/subCategories',subCategoriesRoutes )

router.route('/')
            .get(getCategories)
            .post(createCategoryValidator,creatCategories);

router.route('/:id')
            //@desc (validator,category service)
            .get( getCategoryValidator , getCategory)
            .put(updateCategoryValidator,updateCategory)
            .delete(deleteCategoryValidator,deleteCategory)

module.exports=router;