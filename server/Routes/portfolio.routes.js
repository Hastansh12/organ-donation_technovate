const express = require('express');
const router = new express.Router();
const authentication = require('../Middleware/auth.middleware');
const {
    createPortfolio,viewPortfolio,portfolioById
}=require('../Controllers/portfolio.controller');

router.post('/',authentication.verifyToken,createPortfolio);
router.get('/',authentication.verifyToken,viewPortfolio);
router.get('/:id',authentication.verifyToken,portfolioById);

module.exports=router;