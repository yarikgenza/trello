import React, {Component} from 'react';

export default class Register extends Component {
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
                      <a href="#" onClick={this.props.changeMode.bind(this)} id="login-form-link">Login</a>
                    </div>
                    <div className="col-xs-6">
                      <a href="#" className="active" id="register-form-link">Register</a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="register-form" role="form">
                        <div className="form-group">
                          <input type="text" onChange={this.props.loginChange.bind(this)} name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input type="password" onChange={this.props.passwordChange.bind(this)} name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <button onClick={this.props.registerSubmit.bind(this)} name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register">Register Now</button>
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
