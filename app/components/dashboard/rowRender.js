import React, {Component} from 'react';
import Row from './Row.js'
import {Popover, OverlayTrigger} from 'react-bootstrap';

export default class RowRender extends Component {

  constructor() {
    super()
    this.state = {
      rows: '',
      rowsReady: false
    }
  }

  componentDidMount() {
    const token = this.props.token;

    fetch('/api/row', {
        method: 'get',
        headers: {
          "Content-type": "application/json",
          "authorization": token
        }
      })
      .then((json) => {return json.json()})
          .then((rows) => {
            this.setState({
              rows: rows,
              rowsReady: true
            })
          })
      .catch((e) => {console.log(e)})
  }

  render() {
    const {rows, rowsReady} = this.state;


    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Welcome">
        Let's add your first <strong>list </strong> :)
      </Popover>
    )


    if(!rowsReady) {
      return (
        <Row data={{message: 'waiting...'}} />
      )
    } else if (rowsReady && rows.length !== 0) {
      return (
        <Row data={rows} />
      )
   } else {
      return(
        <div className="addRow">
          <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverBottom}>
            <div className="addButton"></div>
          </OverlayTrigger>
        </div>
       )
    }

  }
}
