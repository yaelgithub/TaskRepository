import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import {actions} from '../Store/actions'

function mapStateToProps(state){
  return{
      user:state.user       
  }
}

const mapDispatchToProps=(dispatch)=>({                                       
  // checkDetails:(e)=>alert(' rrrrrrrrr '+e.target),//)dispatch(actions.checkDetails()
  setEmail:(email)=>{dispatch(actions.setEmail(email))},
  setPassword:(password)=>{dispatch(actions.setPassword(password))}
  
})

export default connect(mapStateToProps,mapDispatchToProps) (function Home(props) {
  const {user,checkDetails,setEmail,setPassword}=props

  // checkDetails=()=>{

  // }

  return (
    
    <div className="container">
      {/*   <div classNameName="row">
                <div classNameName="col-6">
                    <label>name:</label>
                    <input type="text" ></input>
                </div>
                <div classNameName="col-6">
                <label>password:</label>
                <input type="text"></input>
                </div>
            </div>*/}
     {/* <div className="dropdown-menu"> */}

     
  {/* <form className="px-4 py-3" >
    <div className="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email@example.com"></input>
    </div>
    <div className="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
      <label className="form-check-label" for="dropdownCheck">
        Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">New around here? Sign Up</a>
  <a className="dropdown-item" href="#">Forgot password?</a>  */}
 {/* </div> */}
    </div>
  );})
