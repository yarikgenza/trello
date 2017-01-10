import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';
import Notify from './Notify';

export default class Form extends Component {

  constructor() {
    super()
    this.state = {
      mode: 'login',
      login: '',
      password: '',
      notify: ''
    },
    this.changeMode = this.changeMode.bind(this),
    this.loginSubmit = this.loginSubmit.bind(this),
    this.passwordChange = this.passwordChange.bind(this),
    this.loginChange = this.loginChange.bind(this),
    this.registerSubmit = this.registerSubmit.bind(this),
    this.getToken = this.getToken.bind(this)
  }

  getToken(res) {
    if (res === 'Bad credentials' || res === 'User not Found') {
      this.setState({
        notify: 'invalid'
      })
    } else {
      this.props.getToken(res)
    }
  }


  changeMode() {
    const {mode} = this.state;
    if (mode === 'login') {
      this.setState({
        mode: 'register'
      })
    } else {
      this.setState({
        mode: 'login'
      })
    }
  }

  loginChange(e) {
    this.setState({
      login: e.target.value
    })
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  registerSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const {login, password} = this.state;

    fetch('/api/signup', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
        .then((json) => {
          this.setState({
            notify: 'regOk',
            mode: 'login'
          })
        })
        .catch((e) => {
          this.setState({
            notify: 'regBad'
          })
        })
  }

  loginSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const {login, password} = this.state;

    fetch('/api/signin', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
         .then(json => json.json())
         .then((res) => { this.getToken(res) })
         .catch((e) => {
           this.setState({
             notify: 'invalid'
           })
         })
  }


  render() {
    const {mode} = this.state;

    if (mode === 'login') {
      return (
        <div>
          <Login changeMode={this.changeMode} loginSubmit={this.loginSubmit} passwordChange={this.passwordChange} loginChange={this.loginChange} />
          <Notify status={this.state.notify} />
        </div>
      )
    } else {
      return (
        <div>
          <Register changeMode={this.changeMode} registerSubmit={this.registerSubmit} passwordChange={this.passwordChange} loginChange={this.loginChange} />
          <Notify changeMode={this.changeMode} status={this.state.notify} />
        </div>
      )
    }
  }
}
