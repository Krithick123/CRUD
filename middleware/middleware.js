const mongoose=require('mongoose');
const ObjectId=mongoose.Types.ObjectId;

exports.isValidate=(req,res,next)=>{

    if(isNaN(req.body.age)){
        res.status(400).json({error:"INAVALID AGE SHOULD BE IN NUMBER"});
        return;
    }

    if(!ObjectId.isValid(req.params.id)){
    res.status(400).json({error:"INAVALID USER ID"});
    return;
    }

    return next();
}

exports.isAge=(req,res,next)=>{

    if(isNaN(req.body.age)){
        res.status(400).json({error:"INVALID AGE SHOULD BE IN NUMBER"});
        return;
    }
    return next();
}