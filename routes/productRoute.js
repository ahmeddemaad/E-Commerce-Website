const express = require('express');
const {creatProducts,deleteProduct,getProduct,getProducts,updateProduct}=require('../controllers/productServices')
const {createProductValidator,deleteProductValidator,getProductValidator,updateProductValidator} = require('../utils/validators/productValidator')

const router = express.Router();

router.route('/')
            .get(getProducts)
            .post(createProductValidator,creatProducts);

router.route('/:id')
            //@desc (validator,category service)
            .get( getProductValidator , getProduct)
            .put(updateProductValidator,updateProduct)
            .delete(deleteProductValidator,deleteProduct)

module.exports=router;