import React, {Component} from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="formContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6">
                      <a href="#" className="active" id="login-form-link">Login</a>
                    </div>
                    <div className="col-xs-6">
                      <a href="#" onClick={this.props.changeMode.bind(this)} id="register-form-link">Register</a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="login-form" role="form">
                        <div className="form-group">
                          <input type="text" name="username" onChange={this.props.loginChange.bind(this)} id="username" tabIndex="1" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <input type="password" onChange={this.props.passwordChange.bind(this)} name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <button onClick={this.props.loginSubmit.bind(this)} name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login">Log in</button>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <a href="#" tabIndex="5" className="forgot-password">Forgot Password?</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
