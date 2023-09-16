const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const Transplant=require('../Models/transplant.model');
app.use(express.json());

const createtransplant=async(req,res)=>{
    try {
        const user = userData;
        req.body.owner=user._id;
        let transplant=new Transplant(req.body);
        await transplant.save();
        res.status(201).json({message:"transplant added" ,data:transplant});     
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const viewtransplant=async(req,res)=>{
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit; 

    //create Query
    const query = {};
    // query.user_id = req.user._id;
    if (req.query.organType) {
    query.status = { $regex: new RegExp(req.query.status), $options: 'i' };
    }
    if (req.query.donor) {
    query.position = { $regex: new RegExp(req.query.donor), $options: 'i' };
    }
    if (req.query.transplanStatus) {
    query.transplanStatus = req.query.transplanStatus;
    }
    if (req.query.transplantCoordinator) {
        query.transplantCoordinator = req.query.transplantCoordinator;
    }
    if (req.query.transplantOutcome) {
        query.transplantOutcome = req.query.transplantOutcome;
    }
    try {
        
        const totalDocs = await Transplant.countDocuments(query);
        const transplant = await Transplant.find(query).skip(skip).limit(limit);
        const totalPages = Math.ceil(totalDocs / limit);
        const nextPage = page < totalPages ? `/transplant?page=${page + 1}&limit=${limit}` : null;
        const prevPage = page > 1 ? `/transplant?page=${page - 1}&limit=${limit}` : null;

        if(!transplant)
        {
            res.status(501).json({message:"No transplant found" , status:"failed"});
        }
        else
        {            
            res.status(201).json({
                totalDocs,
                totalPages,
                currentpage:page,
                nextPage,
                prevPage,
                transplant
            });
        }

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const transplantById=async(req,res)=>{
    try {
        const id=req.params.id
        let transplant=await Transplant.findById(id);
        if(!transplant)
        {
            return res.status(301).json({message:"No transplant found"});
        }

        res.status(201).json({transplant});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={
    createtransplant,
    viewtransplant,
    transplantById
}
