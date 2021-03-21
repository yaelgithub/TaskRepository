import React, { useState, useEffect, useRef } from 'react';
import { DeleteTask, GetTasks,UpdateTask } from '../connectToServer/taskConnect';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function  DisplayTasks(props) {
  const {user}=props

    const [tasksList,setTasksList]=useState([{}])
    const [currentTitle,setCurrentTitle]=useState('')
    const [currentChecked,setCurrentChecked]=useState(false)

    //משיכת גייסון מ api 
    useEffect(async()=>{  
      const res=await GetTasks(user._id,user.token)
      console.log('res',res);
      if (res.status == 200) {
        await setTasksList(() => res.data.tasks)
        console.log('tasks list',tasksList);
        
    }
    },[])

    //שליחה לסרבר על עידכון ברשימת משימות
    async function reqUpdate(taskId,title,completed,index) {
      //אם היה שינוי בכותרת
      if ((currentTitle != "" && currentTitle!=title)) {
        console.log('start update');
          const res = await UpdateTask(taskId,user.token,currentTitle, currentChecked)
          console.log('from componnent:', res);
          if (res.status === 200) {
             alert('success')
             const updatedList = tasksList.map(item => 
              {
                if (item._id == taskId){
                    item.title= res.data.title
                    item.completed=res.data.completed
                  }
                  return item;                               
              })  
                  
            await setTasksList(updatedList);
            console.log('tasks list after update', tasksList);
          }
          else console.log('no success to update ')
  }
  //אם היה שינוי  בהשלמת  המשימה
  else if(currentChecked != completed){
    const res = await UpdateTask(taskId,user.token,title, currentChecked)
    if (res.status === 200) {
      alert('success')
      const updatedList = tasksList.map(item => 
       {
         if (item._id == taskId){
             item.title= res.data.title
             item.completed=res.data.completed
           }
           return item;                               
       })  
           
     await setTasksList(updatedList);
     console.log('tasks list after update', tasksList);
   }
  }
}
//פילטור על הרשימה החדשה
 async function  Remove(taskId){ 
      const newList = tasksList.filter((item) => item._id !== taskId);
      await setTasksList(newList);
  
  }
  //תפיסת המשימה שרוצים למחוק, שליחה לסרבר ולפונקציה שמציגה מחדש
  async function reqDelete(taskId) {
    console.log(taskId);
    const res = await DeleteTask(taskId, user.token)
    if (res.status == 200) {
        alert('success')
        Remove(taskId)
    }
    else {
        alert("faild!" + res.response.data.toString())
    }
}

return (

<div className="container mt-5">
{
  tasksList?
  tasksList.map((task,index)=>
  
<Modal.Dialog key={index}>
  <Modal.Header className="bg-danger" onClick={()=>reqDelete(task._id)} closeButton>
    <Modal.Title >task {index+1}</Modal.Title>
  </Modal.Header>
  <Modal.Body className="bg-secondary">
    <input type="text" defaultValue={task.title} onChange={e=>setCurrentTitle(e.target.value)} className="font-weight-bold"></input>
    <br></br>
    <input type="checkbox" defaultChecked={task.completed} onClick={e=>setCurrentChecked(e.target.checked)}></input>
  </Modal.Body>

  <Modal.Footer className="bg-danger">
    <Button variant="secondary" className="bg-secondary" onClick={()=>reqUpdate(task._id,task.title,task.completed,index)}>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>)
  
:""
}
</div>

  )};

