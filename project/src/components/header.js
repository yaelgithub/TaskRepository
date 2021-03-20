import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../Store/actions";
// import userReducer from '../Store/Reducers/User'
import { withRouter, Redirect } from "react-router-dom";
import Login from "./login";
import SignUp from "./signUp";
import AddTask from "./addTask";
import DisplayTasks from "./displayTasks";

function mapStateToProps(state) {
  debugger;
  return {
    user: state.userReducer.user,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setStoreUser: (data) => dispatch(actions.setStoreUser(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(function Header(props) {
    const { user, setStoreUser } = props;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/user/login"
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/user/signUp"
                  className="nav-link"
                  id="navbarDropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/task/getTasks" className="nav-link">
                  Show your tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/task/addTask" className="nav-link">
                  Add Task
                </Link>
              </li>
              {user.token ? (
                <li className="nav-item col-2">Hellow {user.name}</li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/user/login">
            <Login setStoreUser={setStoreUser}></Login>
          </Route>
          <Route path="/user/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/task/addTask">
            {user.token != "" ? (
              <AddTask user={user}></AddTask>
            ) : (
              //console.log(user)
              <Redirect to="/user/login" />
            )}
          </Route>
          <Route path="/task/getTasks">
            {user.token != "" ? (
              <DisplayTasks user={user}></DisplayTasks>
            ) : (
              <Redirect to="/user/login" />
            )}
          </Route>
          <Route path="/">
            <Redirect to="/user/login" />
          </Route>
        </Switch>
      </>
    );
  })
);
