const mongoose= require('mongoose')
// const nodemailer= require('nodemailer')

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASSWORD_EMAIL
//     }
// });

const userSchema=mongoose.Schema({
    //_id:{type:mongoose.Types.ObjectId},
    name:{type:String,required:true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: { 
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password:{type:String,required: [true, "Password required"]},
    token:{type:String},
    tasks:[{
        type:mongoose.Types.ObjectId,
        ref:'Task'
    }]
})

// userSchema.post('save',(error, doc, next)=>{
//     console.log('send mail');
//     var mailOptions = {
//         from: process.env.MY_EMAIL,
//         to: this.email,
//         subject: 'wellcom', 
//         text: `hello ${this.name}`
//     };  
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             return error
//         } else {
//             console.log('Email sent: ' + info.response);
//             return  next()
//         } 
//     });
   
// })

module.exports=mongoose.model('User',userSchema)