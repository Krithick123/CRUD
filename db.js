const mongoose=require('mongoose');

const URI="mongodb://127.0.0.1:27017/usercrud"

module.exports=()=>{
    return mongoose.connect(URI);
};