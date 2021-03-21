import axios from "axios";

//req-> email,password
//res-> user,token
export async function logInServer(email, password) {
  const data = await axios
    .get(`http://localhost:4000/user/login?email=${email}&password=${password}`)
    .then((res) => {
      console.log("from login server ", res);
      return res;
    })
    .catch((err) => {
      console.log("error!! ", { ...err });
      return err;
    });
  return data;
}

//req=>name  email  password
//res=>user
export async function SignUpServer(name, email, password) {
  const axios = require("axios");
  const data = JSON.stringify({ name: name, email: email, password: password });
  console.log(data);
  var config = {
    method: "post",
    url: "http://localhost:4000/user/signUp",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const result = await axios(config)
    .then((response) => {
      console.log("from service" + JSON.stringify(response.data));
      return response;
    })
    .catch((error) => {
      console.log("from sign up server" + error);
      return error;
    });
  return result;
}
