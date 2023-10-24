const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    dob:{type:Date},
    age:{type:Number},
    city:{type:String}
})
module.exports=mongoose.model('User',userSchema,'users');