const userController=require('../controllers/userController')
const userRouter=require('express').Router()
// const middlweres=require('../middlweres/middlweres')

userRouter.post('/signUp',userController.signUp)
userRouter.get('/login',userController.login)
// userRouter.post('/Set',userController.SetList)




module.exports=userRouter