import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';
import Header from '../layout/Header';
import { browserHistory } from 'react-router'
import Form from './Form';

export default class AuthPage extends Component {

  constructor() {
    super();
    this.state = {
      authorised: false,
      token: ''
    }
  }

  componentWillMount() {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      browserHistory.push('/dashboard');
    }
  }

  getToken(token) {
    localStorage.setItem('token', token);
    browserHistory.push('/dashboard');
  }
  render() {
    return (
      <div className="authContainer">
        <Header />
        <Form getToken={this.getToken.bind(this)} />
      </div>
    )
  }
}
