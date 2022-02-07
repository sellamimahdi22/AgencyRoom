const express=require('express');
const { register, login, auth } = require('../routecontrollers/user.controller');
const {registerRules,validator}=require('../middlewares/validator')
const verifyAuth=require('../middlewares/verifyAuth')
const router=express.Router();

router.post('/register',register,registerRules,validator)
router.post('/login',login)
router.get('/auth',verifyAuth,auth)
module.exports= router;