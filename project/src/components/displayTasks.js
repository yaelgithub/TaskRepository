import React, { useState,useRef } from 'react';
import { DeleteTask } from '../connectToServer/taskConnect';
import {UpdateTask} from '../connectToServer/userConnect'



export default function  DisplayTasks(props) {
    const [index,setInsex]=useState(1)
    const titleRef=useRef('')
    const checkedRef=useRef(false)
    // const [checked,setChecked]=useState(false)
    const {user}=props

    async function req() {
      if (titleRef.current.value != user.title || checkedRef.current.value != user.complected) {
          const res = await UpdateTask(user._id,user.token,titleRef.current.value, checkedRef.current.value)
          console.log('from componnent:', res);
          if (res.status === 200) {
             // await setStoreUser(res.data)
             alert('task update successfuly')
              return props.history.push('/task/getTasks')
          }
          else alert('error ' + res.response.data)//נסה שנית או הרשמה
      }
      else alert('enter email & password')
  }

return (

<div >

{user.tasks?
    user.tasks.map(item=> 
<div className="modal" tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">task {index}</h5>
        <button type="button" className="close" onClick={DeleteTask} data-dismiss="modal" aria-label="Close">
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>
      <div className="modal-body">
        {/* <p>{title}</p> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>req()}>Save changes </button>
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
      </div>
    </div>
  </div>
</div>):alert('you have no tasks')
}
</div>

  )};

