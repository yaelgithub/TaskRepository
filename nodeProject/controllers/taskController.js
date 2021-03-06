const Task = require('../models/Task')
const User = require('../models/User')

const addTask=(req,res)=>{
    console.log('add task');
    const {userId,title,completed}=req.body
    const currentTask=new Task({userId:userId,title:title,completed:completed})
    console.log('add task');
    currentTask.save()
    .then(task=>{
        User.findByIdAndUpdate({_id:req.body.userId},{$push:{'tasks':task._id}})
        .then(()=>{res.status(200).json(task)})
        .catch(err=>{res.status(400).json({message:'not add to tasks list'})})
    })
    .catch(err=>{res.status(400).json({message:'not add task'})})
}
const getTasks=(req,res)=>{
    console.log('get tasks');
    User.findById(req.params.userId).populate('tasks','title completed')
    .then(user=>{res.status(200).json(user)})
    .catch(err=>{res.status(404).send('not found tasks')})
}
const deleteTask=async(req,res)=>{
    console.log('delete task');
    try {
        const currentTask= await Task.findById(req.params.taskId)
        await User.findByIdAndUpdate(currentTask.userId,{$pull:{tasks:currentTask._id}})
        Task.findOneAndDelete({_id:currentTask._id})
       .then(()=>{res.status(200).json({message:'delete the task'})})
       .catch(()=>{res.status(400).send('not succes to delete task')})
    } catch (error) {
        res.status(400).send('not succes to delete tasks list')
    }
}
const updateTask=(req,res)=>{ 
    console.log('update task');
    Task.findByIdAndUpdate(req.params.taskId,req.body,{new:true})
    .then(task=>{res.status(200).json(task)})
    .catch(()=>{res.status(400).send('error in update task')})
}
module.exports={
    addTask,
    getTasks,
    deleteTask,
    updateTask
}