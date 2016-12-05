import React, {Component} from 'react';
import Row from './Row.js'

export default class RowRender extends Component {

  constructor() {
    super()
    this.state = {
      dataReady: false,
      data: ''
    }
  }

  componentDidMount() {
    const token = this.props.token;

    fetch('/api/task', {
        method: 'get',
        headers: {
          "Content-type": "application/json",
          "authorization": token
        }
      })
      .then((json) => {return json.json()})
          .then((res) => {console.log(res)})
      .catch((e) => {console.log(e)})
  }

  render() {
    return(
      <div>ROW HERE!!! </div>
    )
  }
}
