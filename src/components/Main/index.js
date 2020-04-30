import React from "react";
import List from "./list";
import './style.css';

const Main = (props) => (
  <main className="main">
    <List {...props} />
  </main>
);

export default Main;