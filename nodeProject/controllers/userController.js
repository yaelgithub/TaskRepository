const User=require('../models/User')
const jwt=require('jsonwebtoken');
const nodemailer= require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD_EMAIL
    }
});
function sendMail(user){
    console.log('send mail')
    var mailOptions = {
        from: process.env.MY_EMAIL,
        to: user.email,
        subject: 'wellcom', 
        text: `hello ${user.name} use in fun!!`
    };  
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return error
        } else {
            console.log('Email sent: ' + info.response);
        } 
    });
}
   


const signUp=(req,res)=>{
    console.log('sign up');
    const {name,email,password}=req.body

        const token=jwt.sign({email,password},process.env.SECRET)
        const newUser=new User(req.body)      
        newUser.token=token
        console.log(newUser);
        newUser.save().then(user=>{
            sendMail(user)
            res.status(200).json(user)})
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