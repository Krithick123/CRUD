const express=require('express');
const connectionDB=require('./db');
const bodyParser=require('body-parser')
const app=express();
PORT=8000;

app.use(bodyParser.json())
//ROUTES
const userRouter=require('./routes/userRoutes')
app.use("/api/users",userRouter);

//DB CONNECTION
connectionDB().then(()=>{
console.log("DB connected successfully");
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT ${PORT} PORT NUMBER `);
})
}).catch((err)=>{
    console.log(err);
})

