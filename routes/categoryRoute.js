const express = require('express');
const {getCategories , getCategory ,creatCategories ,updateCategory ,deleteCategory}=require('../controllers/categoryService')

const router = express.Router();

router.route('/').get(getCategories).post(creatCategories);
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)

module.exports=router;