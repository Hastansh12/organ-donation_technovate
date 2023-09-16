const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const Organ=require('../Models/organ.model');
app.use(express.json());

const createOrgan=async(req,res)=>{
    try {
        const user = userData;
        let organ=new Organ(req.body);
        await organ.save();
        res.status(201).json({message:"organ added" ,data:organ});     
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const viewOrgan=async(req,res)=>{
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit; 

    //create Query
    const query = {};
    // query.user_id = req.user._id;
    if (req.query.organType) {
    query.status = { $regex: new RegExp(req.query.status), $options: 'i' };
    }
    if (req.query.transplantationCoordinator) {
    query.transplantationCoordinator= { $regex: new RegExp(req.query.transplantationCoordinator), $options: 'i' };
    }
    if (req.query.tissueType) {
    query.tissueType= req.query.tissueType;
    }
    if (req.query.donor) {
        query.donor= req.query.donor;
    }
    if (req.query.recipient) {
        query.recipient = req.query.recipient;
    }
    try {
        
        const totalDocs = await Organ.countDocuments(query);
        const organ = await Organ.find(query).skip(skip).limit(limit);
        const totalPages = Math.ceil(totalDocs / limit);
        const nextPage = page < totalPages ? `/organ?page=${page + 1}&limit=${limit}` : null;
        const prevPage = page > 1 ? `/organ?page=${page - 1}&limit=${limit}` : null;

        if(!organ)
        {
            res.status(501).json({message:"No organ found" , status:"failed"});
        }
        else
        {            
            res.status(201).json({
                totalDocs,
                totalPages,
                currentpage:page,
                nextPage,
                prevPage,
                organ
            });
        }

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const organById=async(req,res)=>{
    try {
        const id=req.params.id
        let organ=await Organ.findById(id);
        if(!organ)
        {
            return res.status(301).json({message:"No organ found"});
        }

        res.status(201).json({organ});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={
    createOrgan,
    viewOrgan,
    organById
}
