import React, { useRef } from "react";
import { SignUpServer } from "../connectToServer/userConnect";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function SignUp(props) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // const setStoreUser = props.setStoreUser;

  async function req() {
    if (
      nameRef.current.value !== "" &&
      emailRef.current.value !== "" &&
      passwordRef.current.value !== ""
    ) {
      const res = await SignUpServer(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("from componnent:", res);
      console.log("from componnent res.data :", res.data);
      if (res.status === 200) {
        return props.history.push("/user/login");
      } else alert("error " + res.response); //נסה שנית או הרשמה
    } else alert("enter email & password");
  }

  return (
    <>
      <div className="container">
        <h1 className="m-auto text-danger">Sign Up</h1>
        <form className="px-4 py-3 m-auto col-6 bg-secondary">
          <div className="form-group m-2">
            <div className="form-group ">
              <label htmlFor="inputName4">Name</label>
              <input
                type="text"
                className="form-control"
                ref={nameRef}
                name="nameUser"
                id="inputName4"
                placeholder="Name"
              ></input>
            </div>
            <div className="form-group ">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                ref={emailRef}
                name="emailUser"
                id="inputEmail4"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group ">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
                name="passwordUser"
                id="inputPassword4"
                placeholder="Password"
              ></input>
              <button
                type="button"
                className="btn btn-primary bg-danger d-inline m-2"
                onClick={() => req()}
              >
                Sign Up
              </button>
              <Link to="/user/login" className="dropdown-item bg-danger">
                Aren't New? Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
});
