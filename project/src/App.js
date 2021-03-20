import logo from './logo.svg';
import './App.css';
import  Display  from './components/display';
import Home from './components/startPage';
import { Provider } from 'react-redux';
import store from './Store/store'
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom'
import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp';
import AddTask from './components/addTask';
import DisplayTasks from './components/displayTasks';



function App() {
  return (
    <div className="App"> 
    <header ></header>
 <Router>
   <Provider store={store}>          
 <Header></Header>
  </Provider>
</Router>
   {/* <Switch>  */}
    
   {/* <Route path="/user/login">
      <Login></Login>
    </Route>
    <Route path="/user/signUp">
      <SignUp></SignUp>
    </Route> */}
    {/* <Route path="/task/getTasks">
      {
        user.token?
        <DisplayTasks></DisplayTasks>:
        <Login></Login>
      }     
    </Route> */}
    {/* <Route path="/task/addTask">
      <AddTask></AddTask>
    </Route>
    <Route path="/Home">
      <Display/>
    </Route> */}
    {/* <Route path="/PrivateArea">
    <Home/>
    </Route> */}
    {/* <Route path="/">
     <Header></Header>
    </Route> */}
   {/* </Switch> */}
   


    </div>
  );
}

export default App;
