const express=require('express');
const {body}=require('express-validator');
const adminControl=require('../controller/admincontrol');

const adminRoute=express.Router();

adminRoute.post('/signup',body('name').not().isEmpty(),body('email').not().isEmpty(),body('password').isLength(5),adminControl.SignUp);
adminRoute.post('/signin',body('email').not().isEmpty(),body('password').isLength(5),adminControl.SignIn);
adminRoute.get('/view',adminControl.View);

module.exports=adminRoute;