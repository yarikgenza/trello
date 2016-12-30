import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Header extends Component {

  constructor() {
    super();
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.href = '/'
  }


  render() {

    const token = localStorage.getItem('token');

    if(token) {
      return(
        <div className="header">
            <h1 className="header_positioned">Trello</h1>
            <div className="logOut">
              <Button onClick={() => this.logOut()} bsStyle="info">Log out</Button>
            </div>
        </div>
      )
    } else {
      return (
        <div className="header">
            <h1>Trello</h1>
        </div>
      )
    }
  }
}
