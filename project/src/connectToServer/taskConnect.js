import axios from 'axios'


export function GetTasks( email, password) {
    var config = {
        method: 'get',
        url: 'localhost:4000/task/getTasks',
        headers: { 
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MTU5MTg5MzV9.q2apPwbOnSa5_Lsh9L3_k9U0XMNdzTDD_wDqRh3gkjo'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
  })}

//req=> userId,token,title,isCompleted
//res=> 
  export async function AddTaskToServer (userId, token,title,completed){
    var data = JSON.stringify({"userId":userId,"title":title,"completed":completed});
    const axios = require('axios');

var config = {
  method: 'post',
  url: `localhost:4000/task/addTask`,
  headers: { 
    'Authorization': token, 
    'Content-Type': 'application/json'
  },
  data : data
};

const res = await axios(config)
.then((response) => {
    console.log('from controller ',response, JSON.stringify(response));
    return response
})
.catch((error) => {
    console.log('erorr from controller ', error);
    return error
});

return res
  }

  export function DeleteTask(userId,token){
    var config = {
      method: 'delete',
      url: `localhost:4000/task/deleteTask/${userId}`,
      headers: { 
        'Authorization': token
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export function UpdateTask(userId,token){
    var data = JSON.stringify({"title":"math","completed":false});
    const axios = require('axios');

var config = {
  method: 'patch',
  url: `localhost:4000/task/updateTask/${userId}`,
  headers: { 
    'Authorization': token,
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  }