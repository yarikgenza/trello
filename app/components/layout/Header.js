import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

   componentDidMount() {
    const token = localStorage.getItem('token');
    const {text} = this.state;

    if(token) {
      fetch(`/api/user`, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          "authorization": token
        }
      })
        .then((res) => res.json())
          .then((res) => {
            this.setState({
              text: res.login
            })
          })
        .catch((e) => {console.log(e)})
     }
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
              <div className="userLogin">
                <p>{this.state.text}</p>
              </div>
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
