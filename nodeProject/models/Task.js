const mongoose =require('mongoose')

const taskSchema=mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    },
    title:{type:String},
    completed:{type:Boolean,required:true}
})

module.exports=mongoose.model('Task',taskSchema)