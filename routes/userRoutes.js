const express=require('express');
const router=express.Router();
const User=require('../model/userModel');
const {isValidate,isAge}=require('../middleware/middleware')
//get all records
router.get('/',(req,res)=>{
    User.find().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    })
})

//get single records
router.get('/:id',isValidate,(req,res)=>{
    const {id}=req.params;

    User.findById(id).then((data)=>{
        if(data){
            res.send(data);
        }else{
            res.status(404).json({
                error:`NO RECORD FOUND IN ${req.params.id}`
            })
        }
        
    }).catch((err)=>{
        console.log(err);
    })
})

//create new records
router.post('/',isAge,(req,res)=>{
    const {name,email,dob,age,city}=req.body;
    User.create({
        name,
        email,
        dob,
        age,
        city
    }).then((data)=>{
        if(data){
            res.send(data);
        }else{
            res.status(400).json({
                error:`NO DATA IS FOUND `
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
})

//update a record
router.put('/:id',(req,res)=>{
    const {id}=req.params;

    User.findByIdAndUpdate(id,req.body,{new:true}).then((data)=>{
        if(data){
            res.send(data);
        }else{
            res.status(404).json({
                error:`NO RECORD FOUND IN ID : ${req.params.id}`
            })
        }
        
    }).catch((err)=>{
        console.log(err);
    })
})

//delete a  records
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    

    User.findByIdAndDelete(id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports=router;
