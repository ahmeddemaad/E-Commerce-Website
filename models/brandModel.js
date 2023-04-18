const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Brand name Required"],
        unique:true,
        minlength:[3,"Too short for a Brand name"],
        maxlength:[32,"Too long for a Brand name"],
    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,
},{timestamps: true});

module.exports = mongoose.model('Brand',BrandSchema);
