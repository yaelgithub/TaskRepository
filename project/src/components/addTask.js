import React, { useState, useEffect } from "react";

import { AddTaskToServer } from "../connectToServer/taskConnect";

export default function AddTask(props) {
  const { user } = props;
  const [todoList, setTodoList] = useState([{}])
  const [currentTask, setCurrentTask] = useState('')
  const [currentChecked, setCurrentChecked] = useState(false)


  useEffect(async()=>{
    try {        
        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(response);
        const items=await response.json()
        //console.log(items);
        await setTodoList(items)
        console.log(todoList);       
    } catch (error) {
        console.log('error');
    }
},[])

  // useEffect( ()=> {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((data) => {
  //       data.json().then((res) => {
  //          setTodoList(res);
  //          console.log(todoList);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

//שליחה לסרבר להוספת משימה
  async function req(currentTask,checkedRef) {
    console.log('from component add');
    if (currentTask != '') {
      const res = await AddTaskToServer(
        user._id,
        user.token,
        currentTask,
        checkedRef
      );
      console.log("from componnent:", res);
      if (res.status === 200) {
        console.log('add');
        setCurrentTask("")
        alert("task add successfuly");
        
      } 
    } else {console.log('no add');
    alert("not add :( ");}
  }

  return (
    <>
    {
      todoList?
    
      <div className="continer">
        <div className="row" style={{float:"right"}}>
          <div className="col-12 m-auto">
            <h2 className="text-center text-danger"> Choose New Task</h2>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="search"
              value={currentTask}
              onChange={(e) => {
                setCurrentTask(e.target.value);
              }}
            ></input>
            <datalist id="datalistOptions">
              {todoList.map((item, index) => {
                return <option key={index} value={item.title}></option>
              })}
            </datalist>
          </div>
        </div>
      </div>:""
}

      <div className="card bg-secondary m-2" style={{ width: "20rem" }}>
        <div className="card-body ">
          <input
            style={{width:"15rem"}}
            type="text"
            placeholder="Title of task"
            value={currentTask}
            name="title"
            placeholder="enter title"
            onChange={(e) => {
              setCurrentTask(e.target.value);
            }}
          ></input>
          <p className="card-text d-inline p-2"> completed?</p>
          <input
            className="d-inline p-2"
            //ref={checkedRef}

            name="checked"
            type="checkbox"
            onClick={e=>setCurrentChecked(e.target.checked)}
          ></input>
          <button
            className="btn btn-primary d-block bg-danger m-auto"
            onClick={() => req(currentTask, currentChecked)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}