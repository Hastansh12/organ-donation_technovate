const express = require('express');
const router = new express.Router();
const authentication = require('../Middleware/auth.middleware');
const {
    createHospital,viewHospital,hospitalById
}=require('../Controllers/hospital.controller');

router.post('/',authentication.verifyToken,createHospital);
router.get('/',authentication.verifyToken,viewHospital);
router.get('/:id',authentication.verifyToken,hospitalById);

module.exports=router;