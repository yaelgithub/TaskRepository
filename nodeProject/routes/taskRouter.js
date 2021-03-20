const taskRouter=require('express').Router()
const taskController=require('../controllers/taskController')
const middlweres=require('../middlweres/middlweres')

taskRouter.get('/getTasks',middlweres.checkConnectAuth,taskController.getTasks)
taskRouter.post('/addTask',middlweres.checkConnectAuth,taskController.addTask)
taskRouter.patch('/updateTask/:taskId',middlweres.checkConnectAuth,taskController.updateTask)
taskRouter.delete('/deleteTask/:taskId',middlweres.checkConnectAuth,taskController.deleteTask)


module.exports=taskRouter
//login,signup,getTasks,addTask,deleteTask,UpdateTask
