const User=require('../models/User')
const jwt=require('jsonwebtoken')


const signUp=(req,res)=>{
    console.log('sign up');
    const {name,email,password}=req.body

        const token=jwt.sign({email,password},process.env.SECRET)
        const newUser=new User(req.body)      
        newUser.token=token
        console.log(newUser);
        newUser.save().then(user=>res.status(200).json({user:user}))
        .catch((err)=>{res.status(400).send('user not sign up'+err)})

}

const login=(req,res)=>{
    console.log('login');
    const {email,password}=req.query       
    User.findOne({email:email,password:password})
    .then(user=>{
        res.status(200).json({user})
    })
    .catch(()=>{res.status(401).send('error in connect user')})
}


module.exports={
    signUp,
    login
}