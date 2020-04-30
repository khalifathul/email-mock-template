import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
const SideBar = (props) => (
  <aside className="sidebar">
    <div className="compose-btn">
    	<button type="button" className="btn" onClick={props.clickCompose}>Compose</button>
    </div>
    <div className="links">
  		<Link to="/"><div>Inbox</div></Link>
  		<Link to="/sent"><div>Sent mail</div></Link>
      <div>Starred</div>
      <div>Important</div>
    </div>
  </aside>
);

export default SideBar;