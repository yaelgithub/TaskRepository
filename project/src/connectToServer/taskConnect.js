import axios from "axios";

//res => tasksList
export async function GetTasks(userId, token) {
  const axios = require("axios");
  const data = JSON.stringify({ token: token });
  var config = {
    method: "get",
    url: `http://localhost:4000/task/getTasks/${userId}`,
    headers: {
      Authorization: token,
    },
    data: data,
  };
  //JSON.stringify(response.data)
  const result = await axios(config)
    .then(function (response) {
      console.log("from server " + JSON.stringify(response.data));
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return result;
}

//req=> userId,token,title,isCompleted
//res=>
export async function AddTaskToServer(userId, token, title, completed) {
  var data = JSON.stringify({
    userId: userId,
    title: title,
    completed: completed,
  });
  console.log("from add server ", data);
  const axios = require("axios");
  console.log("from server");
  var config = {
    method: "post",
    url: `http://localhost:4000/task/addTask`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios(config)
    .then((response) => {
      console.log("from controller ", response);
      return response;
    })
    .catch((error) => {
      console.log("erorr from controller ", error);
      return error;
    });

  return res;
}

export async function DeleteTask(userId, token) {
  var config = {
    method: "delete",
    url: `http://localhost:4000/task/deleteTask/${userId}`,
    headers: {
      Authorization: token,
    },
  };

  const result = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return result;
}

export async function UpdateTask(taskId, token, title, completed) {
  var data = JSON.stringify({ title: title, completed: completed });
  const axios = require("axios");
  console.log("from server update", data);

  var config = {
    method: "post",
    url: `http://localhost:4000/task/updateTask/${taskId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: data,
  };

  const result = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return result;
}
