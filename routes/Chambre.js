const express=require('express');
const AuthRole = require('../middlewares/Roleauth');
const verifyAuth = require('../middlewares/verifyAuth');
const {getchambre,getonechambre,addchambre,deletechambre,editchambre}=require('../routecontrollers/Chamb.controller')
const router =express.Router();


router.get('/get-chambre',getchambre);
router.get('/get-chambre/:id',getonechambre)
router.post('/add-chambre',verifyAuth,addchambre)
router.delete('/delete-chambre/:id',verifyAuth,deletechambre)
router.put('/edit-chambre/:id',verifyAuth,editchambre)


module.exports=router