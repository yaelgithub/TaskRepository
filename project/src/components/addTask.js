import React, { useState,useEffect,useRef } from 'react';

import {AddTaskToServer} from '../connectToServer/taskConnect'


export default function  AddTask(props) {
  const {user}=props
  const titleRef=useRef('')
  const checkedRef=useRef(false)

  async function req() {
    if (titleRef.current.value != '' && checkedRef.current.value != '') {
        const res = await AddTaskToServer(user._id,user.token,titleRef.current.value, checkedRef.current.value)
        console.log('from componnent:', res);
        if (res.status === 200) {
           // await setStoreUser(res.data)
           alert('task add successfuly')
            return props.history.push('/task/getTasks')
        }
        else alert('error ' + res.response.data)//נסה שנית או הרשמה
    }
    else alert('enter email & password')
}

  //   useEffect(async()=>{
  //     try {        
  //         const response=await fetch('https://jsonplaceholder.typicode.com/todos')
  //         const items=await response.json()
  //         setItems(items)
  //         //console.log(list);
          
  //     } catch (error) {
  //         console.log('error');
  //     }

  // },[])

return (

<>

{/* <div class="dropdown"  >
  <button class="btn btn-secondary dropdown-toggle col-4 float-right  " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Your Tasks
    <div className="dropdown-menu " style={{overflow:"scroll"}}> 
  {
            items?
               
            items.map((item,index)=>
            <button className="list-group-item" key={index}>{item.title}</button>
             )        
        
        :""}
</div>
  </button>
</div> */}

  {/* {
      items?
      {items.map((item,index)=>{
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    
      
        <button class="dropdown-item" type="button">{item}</button>
  </div> })}:""} */}



<div className="card bg-secondary m-2" style={{width:"18rem"}}>
  <div className="card-body ">
    <input type="text" placeholder="Title of task" ref={titleRef} name="title"  placeholder="enter title"></input>
    <p className="card-text d-inline p-2"> completed?</p>
    <input className="d-inline p-2" ref={checkedRef} name="checked" type="checkbox"></input>
    <button className="btn btn-primary d-block bg-danger m-auto" onClick={()=>req(titleRef,checkedRef)}>Add</button>
   
  </div>
</div>
</>
  )};
//onClick={AddTaskToServer(title,checked)}
