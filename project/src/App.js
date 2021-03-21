import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <header></header>
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
