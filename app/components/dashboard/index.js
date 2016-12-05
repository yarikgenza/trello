import React, {Component}from 'react';

export default class Dashboard extends Component {

  getToken() {
     return localStorage.getItem('token')
  }

  render() {
    return(
      <div> Its a main doshboard and {this.getToken()}</div>
    )
  }
}
