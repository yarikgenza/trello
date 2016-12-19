import React, {Component}from 'react';
import Header from '../layout/Header';
import RowRender from './rowRender';

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
          <RowRender token={this.state.token} />
        </div>
      </div>
    )
  }
}
