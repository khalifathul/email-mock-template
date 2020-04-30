import React, { Component } from "react";
import './style.css';
const Eye = require("./../../assets/eye.png");

class List extends Component {
  mailClick(id) {
    this.props.mailClick(id);
  }
  render() {
    const { list } = this.props;
    const mailList = list.map(mail => { 
      return ( 
        <div key={mail.id} onClick={this.mailClick.bind(this, mail.id)}>
          <span className="check"></span>
          <img src={Eye} alt="Eye" />
          <strong>{mail.userFrom}</strong>
          <div className="mail-content">{mail.mail}</div>
        </div>
      ) 
    });
    return (
      <div className="mailList">
        {mailList}
      </div>
    );
  }
}

export default List;