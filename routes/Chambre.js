const express=require('express');
const AuthRole = require('../middlewares/Roleauth');
const verifyAuth = require('../middlewares/verifyAuth');
const {getchambre,getonechambre,addchambre,deletechambre,editchambre}=require('../routecontrollers/Chamb.controller')
const router =express.Router();


router.get('/get-chambre',getchambre);
router.get('/get-chambre/:id',getonechambre)
router.post('/add-chambre',addchambre)
router.delete('/delete-chambre/:id',deletechambre)
router.put('/edit-chambre/:id',editchambre)


module.exports=router