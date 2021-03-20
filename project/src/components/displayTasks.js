import React, { useState,useRef, useEffect } from 'react';
import { DeleteTask, GetTasks } from '../connectToServer/taskConnect';
import {UpdateTask} from '../connectToServer/taskConnect'



export default function  DisplayTasks(props) {
    // const [index,setInsex]=useState(1)
    const [items,setItems]=useState([])
    const titleRef=useRef('')
    const checkedRef=useRef(false)
    // const [checked,setChecked]=useState(false)
    const {user}=props

    // useEffect(async()=>{
    //   const res=await GetTasks(user._id,user.token)
    //    await setItems(res)
    //    console.log(' useEffect',items);
    // },[])

    async function reqUpdate() {
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
  async function reqDel(){

  }

return (

<div >

<div className="modal" tabIndex={-1} role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label={"Close"}>
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

