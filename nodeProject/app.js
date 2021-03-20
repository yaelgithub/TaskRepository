const express=require('express')
const app=express()
const dotenv=require('dotenv')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose')
dotenv.config()

// app.use(bodyParser.urlencoded({ extended: true }));
const jwt=require('jsonwebtoken')
const userRouter=require('./routes/userRouter')
const taskRouter=require('./routes/taskRouter')

const connectionParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.DB_CONNECT,connectionParams)
    .then(()=>{
        console.log('connected');
    }).catch((err)=>{
        console.log(`the error: ${err}`);
    })



app.use('/user',userRouter)
app.use('/task',taskRouter)




// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, authorization, Content-Type, Accept");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });


app.listen(4000,()=>{console.log('listen in port 4000');})