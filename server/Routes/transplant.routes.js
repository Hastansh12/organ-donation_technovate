const express = require('express');
const router = new express.Router();
const authentication = require('../Middleware/auth.middleware');
const {
    createtransplant,viewtransplant,transplantById
}=require('../Controllers/transplant.controller');

router.post('/',authentication.verifyToken,createtransplant);
router.get('/',authentication.verifyToken,viewtransplant);
router.get('/:id',authentication.verifyToken,transplantById);

module.exports=router;