// @desc instead of using Param we use check
const { check  } = require('express-validator');
const middlewareValidator = require('../../middlewares/validatorMiddleware')

// @desc Object validator for getting category
// @params of the array (rule(s) , middlewareValidator)
exports.getCategoryValidator=[
    check('id').isMongoId().withMessage("invalid category Id format"),
    middlewareValidator,
];

exports.createCategoryValidator=[
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a category")
    .isLength({max:32}).withMessage("too long to be a category"),
    middlewareValidator,
]

exports.updateCategoryValidator=[
    check('id').isMongoId().withMessage("invalid category Id format"),
    check('name')
    .notEmpty().withMessage("Required to fill")
    .isLength({min:3}).withMessage("too Short to be a category")
    .isLength({max:32}).withMessage("too long to be a category"),
    middlewareValidator,
]

exports.deleteCategoryValidator=[
    check('id').isMongoId().withMessage("invalid category Id format"),
    middlewareValidator,
]