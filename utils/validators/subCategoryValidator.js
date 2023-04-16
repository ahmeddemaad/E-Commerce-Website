// @desc instead of using Param we use check
const { check  } = require('express-validator');
const middlewareValidator = require('../../middlewares/validatorMiddleware')

// @desc Object validator for getting category
// @params of the array (rule(s) , middlewareValidator)
exports.getSubCategoryValidator=[
        check('id').isMongoId().withMessage("invalid subCategory Id format")
        .notEmpty().withMessage("ID required"),
        middlewareValidator,
    ];

exports.createSubCategoryValidator=[
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a subCategory")
    .isLength({max:32}).withMessage("too long to be a subCategory"),
    check('category').isMongoId().withMessage("Invalid category Id format"),
    middlewareValidator,
]

exports.updateSubCategoryValidator=[
    check('id').isMongoId().withMessage("invalid subCategory Id format")
    .notEmpty().withMessage("ID required"),
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a subCategory")
    .isLength({max:32}).withMessage("too long to be a subCategory"),
    middlewareValidator,
]

exports.deleteSubCategoryValidator=[
    check('id').isMongoId().withMessage("invalid subCategory Id format")
    .notEmpty().withMessage("ID required"),
    middlewareValidator,
]