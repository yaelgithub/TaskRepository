import React, { useState, useEffect } from 'react';
import { DeleteTask, GetTasks } from '../connectToServer/taskConnect';
import {UpdateTask} from '../connectToServer/taskConnect'



export default function  DisplayTasks(props) {
  const {user}=props

    // const [index,setInsex]=useState(1)
    const [tasksList,setTasksList]=useState([{}])

    // const [checked,setChecked]=useState(false)
    
    useEffect(async()=>{  
      const res=await GetTasks(user._id,user.token)
      if (res.status == 200) {
        console.log(res.data.tasks);
        await setTasksList(() => res.data.tasks)
    }
    },[])

    async function reqUpdate() {
    //   if (titleRef.current.value != user.title || checkedRef.current.value != user.complected) {
    //       const res = await UpdateTask(user._id,user.token,titleRef.current.value, checkedRef.current.value)
    //       console.log('from componnent:', res);
    //       if (res.status === 200) {
    //          // await setStoreUser(res.data)
    //          alert('task update successfuly')
    //           return props.history.push('/task/getTasks')
    //       }
    //       else alert('error ' + res.response.data)//נסה שנית או הרשמה
    //   }
    //   else alert('enter email & password')
  }
  function Remove(taskId){ 
      const newList = tasksList.filter((item) => item._id !== taskId);
      setTasksList(newList);
  
  }
  async function deleteTask(taskId) {
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

<div className="container-fluid mt-5">

<div className="modal" tabIndex={-1} role={"dialog"}>
  <div className="modal-dialog" role={"document"}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



{/* {items?  */}
    {/* items.map((item,index)=>  */}
{/* <div classNameName="modal" tabIndex="-1" role="dialog" key={index}>
  <div classNameName="modal-dialog" role="document">
    <div classNameName="modal-content">
      <div classNameName="modal-header" > 
        <h5 classNameName="modal-title">task </h5>
        <button type="button" classNameName="close" onClick={()=>reqUpdate()} data-dismiss="modal" aria-label="Close"> */}
          {/* <span aria-hidden="true">&times;</span> */}
        {/* </button>
      </div>
      <div classNameName="modal-body">
        <p>{item.title} is {item.complected}</p>
      </div>
      <div classNameName="modal-footer">
        <button type="button" classNameName="btn btn-primary" onClick={()=>reqDel()}>Save changes </button> */}
        {/* <button type="button" classNameName="btn btn-secondary" data-dismiss="modal">Close</button> */}
      {/* </div>
    </div>
  </div> */}
{/* </div>):alert('you have no tasks') */}
{/* } */}
</div>

  )};

