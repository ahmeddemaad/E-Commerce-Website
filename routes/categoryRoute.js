const express = require('express');
const {getCategories , getCategory ,creatCategories}=require('../controllers/categoryService')

// routes

//Creating first post req to save data on our Database.
// make sure that this code got me an error caz data sent from post man we didnt parse here so parsing is necessary inorder to
//convert jsonString which is sent from postman to javascript object which we can then accuire name or whatever we want from it
//parsing is done as we know in middlewares

const router = express.Router();

// instead if this
// router.get('/',getCategories)
// router.post('/',creatCategories)
router.route('/').get(getCategories).post(creatCategories);
router.route('/:id').get(getCategory)

module.exports=router;