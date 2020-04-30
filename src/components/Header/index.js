import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "./../../actions/index";
import './style.css';
const Logo = require("./../../assets/logo.png");
const Search = require("./../../assets/search.png");
const User = require("./../../assets/user.png");

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUser(user))
  };
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      users: [
        {name: "Beno", id: 1},
        {name: "John", id: 2},
        {name: "Mary", id: 3}
      ]
    };
    this.popupToggle = this.popupToggle.bind(this);
  }

  popupToggle() {
    this.setState({ popup: !this.state.popup });
  }

  userClick(selected) {
    this.props.setUser(selected)
  }

  render() {
    return (
      <header className="header row no-gutters">
          <div className="col-2"> 
             <img src={Logo} alt="Logo" />
           </div>
           <div className="col-7 search text-right">  
              <input type="text" />
              <img src={Search} alt="search" />
           </div>
           <div className="col-3 userArea text-right">  
              <img src={User} alt="user" onClick={this.popupToggle} />
              {this.state.popup && <div className="popup">
                <ul>{this.state.users.map(user => <li key={user.id} onClick={this.userClick.bind(this, user.name)} > {user.name} </li>)}</ul>
              </div>}
           </div>
      </header>
    )
  }
}

export default connect(null, mapDispatchToProps)(Header);