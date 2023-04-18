const express = require('express');
const {creatBrand,deleteBrand,getBrand,getBrands,updateBrand}=require('../controllers/brandService')
const {createBrandValidator,deleteBrandValidator,getBrandValidator,updateBrandValidator} = require('../utils/validators/BrandValidator')

const router = express.Router();

router.route('/')
            .get(getBrands)
            .post(createBrandValidator,creatBrand);

router.route('/:id')
            //@desc (validator,category service)
            .get( getBrandValidator , getBrand)
            .put(updateBrandValidator,updateBrand)
            .delete(deleteBrandValidator,deleteBrand)

module.exports=router;