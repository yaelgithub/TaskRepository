import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {logInServer} from '../connectToServer/userConnect'

export default withRouter( function  Login (props) {

    const emailRef=useRef('')
    const passwordRef=useRef('')
    const setStoreUser = props.setStoreUser

    //מקבל את נתוני המשמתש החדש ומעביר לפונקציית סרבר
    async function req() {
      if (emailRef.current.value != '' && passwordRef.current.value != '') {
          const res = await logInServer(emailRef.current.value, passwordRef.current.value)
          console.log('from componnent:', res.data);
          if (res.status === 200) {
            
              await setStoreUser(res.data)
              // console.log('after set store props ',props.user);
              return props.history.push('/task/getTasks')
          }
          else alert('error ' + res.response.data)//נסה שנית או הרשמה
      }
      else alert('enter email & password')
  }


  return (
   <div className="container"> 
   <h1 className="m-auto text-danger">Log In</h1>
<form className="px-4 py-3 m-auto col-6 bg-secondary" >
 
    <div className="form-group">
      <label htmlFor="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" ref={emailRef} name="emailUser" id="exampleDropdownFormEmail1" placeholder="email@example.com"></input>
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" ref={passwordRef} name="passworsUser" id="exampleDropdownFormPassword1" placeholder="Password"></input>
    </div>

    
    <button type="button" className="btn btn-primary bg-danger" onClick={()=>req()}>Sign in</button>
    <Link to="/user/signUp" className="dropdown-item bg-danger m-2 col-12" >New around here? Sign Up</Link>
</form>

    </div>
  )})

