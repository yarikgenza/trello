import React, {Component}from 'react';
import Header from '../layout/Header';
import rowRender from './rowRender';

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      token: ''
    }
  }

  componentWillMount() {
    let token = localStorage.getItem('token');
    this.setState({
      token: token
    })
  }

  render() {
    return(
      <div id="dashboardContainer">
        <Header />
        <div className="main">
          <rowRender token={this.state.token} />
        </div>
      </div>
    )
  }
}
