import React, { Component } from "react";
import { connect } from "react-redux";
import { addMail } from "./../../actions/index";
import './style.css';
const Close = require("./../../assets/close.png");
const Down = require("./../../assets/down.png");

function mapDispatchToProps(dispatch) {
  return {
    addMail: mail => dispatch(addMail(mail))
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.value,
    mails: state.mail.mails
  };
}

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      id: props.mails.length + 1,
      userPopup: false,
      userTo: "",
      users: [
        {name: "Beno", id: 1},
        {name: "John", id: 2},
        {name: "Mary", id: 3}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.popupClose = this.popupClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userListPopup = this.userListPopup.bind(this);
  }

  popupClose() {
    this.props.popupClose();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { mail, id, userTo } = this.state;
    this.setState({ id: id+1 });
    const email = {
        mail, 
        id,
        userTo,
        userFrom: this.props.user
    }
    if(mail!==""){
      this.props.addMail(email);
    }
    this.setState({ mail: "" });
  }
  userClick(user) {
    this.setState({
      userTo: user
    })
  }
  userListPopup() {
    this.setState({
      userPopup: !this.state.userPopup
    })
  }
  render() {
    const { mail, userPopup, userTo } = this.state;
    const { mailId } = this.props;
    const noActiveUser = this.state.users.filter(el => el.name !== this.props.user);
    const chatFilter = this.props.mails.filter(el => el.userTo === userTo);
    const clikedMail = this.props.mails.filter(el => el.id === mailId);
    let chats,
        userFrom;
    if(mailId === undefined){
      chats = chatFilter.map(el => {
        return (
          <div className="chat-history">
            <div>{el.mail}</div>
          </div>
        )
      })
    }else {
      chats = clikedMail.map(el => {
        userFrom = el.userFrom
        return (
          <div className="chat-history">
            <div>{el.mail}</div>
          </div>
        )
      })
    }
    
    return (
      <div className="mail-popup">
          <div className="mail-popup-title">
            <h5>New Message</h5>
            <img src={Close} alt="close" onClick={this.popupClose} />
          </div>
          <div className="mail-popup-header" onClick={this.userListPopup}>
            <h6>{mailId !== undefined?userFrom:userTo !== "" ? userTo:"Select recipient"}</h6>
            <img src={Down} alt="down" />
            {userPopup && <ul>{noActiveUser.map(name => <li key={name.id} onClick={this.userClick.bind(this, name.name)}> {name.name} </li>)}</ul>}
          </div>
          {chats}
          <div className="reply-box">
            <form onSubmit={this.handleSubmit}>
              <textarea
                id="mail"
                value={mail}
                onChange={this.handleChange}>
              </textarea>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
    )
  }
}

const MailPopup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

export default MailPopup;