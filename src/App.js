import React from "react";
import { HashRouter,Routes, Route,  } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation"
import './App.css'

 const App = () => {
  return (
    <HashRouter className="App">
      <Navigation/>

      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/about"} element={<About/>} />
      </Routes>
    </HashRouter>
  );
};

export default App