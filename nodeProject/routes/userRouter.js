const userController=require('../controllers/userController')
const userRouter=require('express').Router()

userRouter.post('/signUp',userController.signUp)
userRouter.get('/login',userController.login)





module.exports=userRouter