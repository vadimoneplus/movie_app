import React from 'react';
import {NavLink} from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </div>
  );
};

export default Navigation;