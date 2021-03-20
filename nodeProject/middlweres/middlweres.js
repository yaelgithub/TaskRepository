const jwt=require('jsonwebtoken')
const User=require('../models/User')


const checkConnectAuth=(req,res,next)=>{
    console.log('middlwere');
    jwt.verify(req.headers['authorization'],process.env.SECRET,function (err, decoded) {
        if (err || !decoded) 
            res.status(401).json({message:'not allow'})
        console.log(req.headers);
         User.findById(decoded._id)
         .then(()=>{  
            next()       
        })
        .catch(err => {
            console.log('middlwerer not found');
            res.status(400).send('not allow!!')
            })
        })
    }


module.exports={
    checkConnectAuth
}