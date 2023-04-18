// @desc instead of using Param we use check
const { check  } = require('express-validator');
const middlewareValidator = require('../../middlewares/validatorMiddleware')

// @desc Object validator for getting Brand
// @params of the array (rule(s) , middlewareValidator)
exports.getBrandValidator=[
    check('id').isMongoId().withMessage("invalid Brand Id format"),
    middlewareValidator,
];

exports.createBrandValidator=[
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a Brand")
    .isLength({max:32}).withMessage("too long to be a Brand"),
    middlewareValidator,
]

exports.updateBrandValidator=[
    check('id').isMongoId().withMessage("invalid Brand Id format"),
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a Brand")
    .isLength({max:32}).withMessage("too long to be a Brand"),
    middlewareValidator,
]

exports.deleteBrandValidator=[
    check('id').isMongoId().withMessage("invalid Brand Id format"),
    middlewareValidator,
]