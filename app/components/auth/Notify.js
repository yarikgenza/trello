import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Notify extends Component {

  render() {

    const {status} = this.props;

    if(status === "regOk") {
      return(
          <div className="notifyWrap">
            <Alert bsStyle="success">
              <p>Successful registered! Now you can log in.</p>
            </Alert>
          </div>
      )
    } else if (status === "invalid"){
      return(
          <div className="notifyWrap">
            <Alert bsStyle="danger">
              <p>Invalid login or password</p>
            </Alert>
          </div>
      )
    } else {
      return null;
    }
  }
}
