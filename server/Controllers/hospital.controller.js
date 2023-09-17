const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const Hospital=require('../Models/hospital.model');
app.use(express.json());

const hospitalSignup=async(req,res)=>{
    try {
        const {name,email,password,contactPhone}=req.body;
        let data=new Hospital(req.body);
        await hospital.save();
        res.status(201).json({message:"Signup done" ,data:hospital}); 
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const hospitalLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password)
        return res.status(400).json({ message: "Please Fill the Details" });
    try {
        const hospitalData = await Hospital.findOne({ email: req.body.email });
        if (!hospitalData) return res.status(400).json({ error: "User not found" });
        const validPassword = await bcrypt.compare(
            req.body.password,
            hospitalData.password
        ); //comparing hashed password
        if (!userData || !validPassword)
            res.status(400).json({ error: "Invalid credentials" });
        else {
            const token = jwt.sign({ _id: userData._id }, SECRET_KEY, {
                expiresIn: "1d",
            }); //generating jwt
            userData.tokens = userData.tokens.concat({ token }); //saving token in tokens field of db
            await userData.save();
            //sending verification mail
            await sendEmail({
                emailId: email,
                subject: "Logged In",
                message: "Verification mail for login on fantasyLeague",
            });
            return res.status(200).json({ token: token, userData });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createHospital=async(req,res)=>{
    try {
        const user = userData;
        let hospital=new Hospital(req.body);
        await hospital.save();
        res.status(201).json({message:"hospital added" ,data:hospital});     
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const viewHospital=async(req,res)=>{
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit; 

    //create Query
    const query = {};
    // query.user_id = req.user._id;
    if (req.query.hospitalType) {
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
        
        const totalDocs = await Hospital.countDocuments(query);
        const hospital = await Hospital.find(query).skip(skip).limit(limit);
        const totalPages = Math.ceil(totalDocs / limit);
        const nextPage = page < totalPages ? `/hospital?page=${page + 1}&limit=${limit}` : null;
        const prevPage = page > 1 ? `/hospital?page=${page - 1}&limit=${limit}` : null;

        if(!hospital)
        {
            res.status(501).json({message:"No hospital found" , status:"failed"});
        }
        else
        {            
            res.status(201).json({
                totalDocs,
                totalPages,
                currentpage:page,
                nextPage,
                prevPage,
                hospital
            });
        }

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const hospitalById=async(req,res)=>{
    try {
        const id=req.params.id
        let hospital=await Hospital.findById(id);
        if(!hospital)
        {
            return res.status(301).json({message:"No hospital found"});
        }

        res.status(201).json({hospital});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={
    createHospital,
    viewHospital,
    hospitalById
}