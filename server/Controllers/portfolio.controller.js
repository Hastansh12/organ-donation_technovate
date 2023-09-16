const User = require('../Models/user.model');
const Portfolio=require('../Models/portfolio.model');

const createPortfolio=async(req,res)=>{
    try {
        const user = userData;
        req.body.owner=user._id;
        let portfolio=new Portfolio(req.body);
        await portfolio.save();
        res.status(201).json({message:"Portfolio added" ,data:portfolio});     
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const viewPortfolio=async(req,res)=>{
    try {
        const user = userData;
        let portfolio=await Portfolio.findOne({owner:user._id});
        if(!portfolio)
        {
            return res.status(301).json({message:"No portfolio found"});
        }

        res.status(201).json({portfolio});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const portfolioById=async(req,res)=>{
    try {
        const id=req.params.id
        let portfolio=await Portfolio.findById(id);
        if(!portfolio)
        {
            return res.status(301).json({message:"No portfolio found"});
        }

        res.status(201).json({portfolio});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={
    createPortfolio,
    viewPortfolio,
    portfolioById
}