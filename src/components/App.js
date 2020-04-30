import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import Main from "./Main";
import Header from "./Header";
import SideBar from "./Sidebar";
import PopUp from "./Popup";

function mapStateToProps(state) {
  return {
    user: state.user.value,
    mail: state.mail.mails
  };
}

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        popup: false,
      }
      this.clickCompose = this.clickCompose.bind(this);
      this.popupClose = this.popupClose.bind(this);
      this.mailClick = this.mailClick.bind(this);
    }

    clickCompose() {
      this.setState({popup: true})
    }

    popupClose() {
      this.setState({popup: false})
    }

    mailClick(id) {
      this.setState({
        popup: true,
        id
      })
    }

    render() {
      const { user, mail } = this.props;
      let sentBox = mail.filter(el => el.userFrom === user && el.userTo !== user);
      let inBox = mail.filter(el => el.userFrom !== user && el.userTo === user);
        return (
          <Router>
            <Header user={user} />
            <div className="row no-gutters">
            	<div className="col-3">
            		<SideBar clickCompose={this.clickCompose} />
            	</div>
            	<div className="col-9">
            		<Switch>
                  <Route exact path="/" component={() => <Main list={inBox} mailClick={this.mailClick} />} />
        		      <Route path="/sent" component={() => <Main list={sentBox} mailClick={this.mailClick} />} />
        		    </Switch>
                {this.state.popup && <PopUp mailId={this.state.id} popupClose={this.popupClose} />}
            	</div>
            </div>
          </Router>
        )
    }
}

const MainApp = connect(mapStateToProps)(App);

export default MainApp;