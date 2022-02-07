const express=require('express')
const { check, validationResult } = require('express-validator')


exports.registerRules=()=>
{
    check('firstname','This filed is required').notEmpty()
    check('Lastname','This filed is required').notEmpty()
    check('Email','This filed is required').notEmpty()
    check('Email','This filed is required').isEmail()
    check('password','This filed should be min 6 character').isLength({min:6})
    check('phone','This filed is required').notEmpty()
    check('country','This filed is required').notEmpty()
    check('userRole','This filed is required').notEmpty()

}
exports.loginRules=()=>
{
    
    check('Email','This filed is required').notEmpty()
    check('Email','This filed is required').isEmail()
    check('password','This filed should be min 6 character').isLength({min:6})
    

}

exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    errors.isEmpty()?next():res.status(406).json({errors:errors.array()})
}






