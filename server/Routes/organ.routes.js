const express = require('express');
const router = new express.Router();
const authentication = require('../Middleware/auth.middleware');
const {
    createOrgan,viewOrgan,organById
}=require('../Controllers/organ.controller');

router.post('/',authentication.verifyToken,createOrgan);
router.get('/',authentication.verifyToken,viewOrgan);
router.get('/:id',authentication.verifyToken,organById);

module.exports=router;