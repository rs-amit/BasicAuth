import { useState } from "react";
import './App.css';
import Login from "./screen/Login";
import Home from "./screen/Home";
import { StateHandler } from "./contextProvider/MainProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {


  const { state, setState, loginUserWithCredential } = StateHandler();

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={state?<Home />:<Login />}/>
          <Route exact path="/login" element={!state ? <Login />: <Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
