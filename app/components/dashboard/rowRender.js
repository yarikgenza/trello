import React, {Component} from 'react';
import Row from './Row.js';
import AddRow from './AddRow.js'
import {Popover, OverlayTrigger} from 'react-bootstrap';

export default class RowRender extends Component {

  constructor() {
    super()
    this.state = {
      rows: '',
      rowsReady: false,
      modal: false
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


  addRow() {
    console.log('clicked')
  }

  openModal() {
    this.setState({
      modal: true
    })
  }


  render() {
    const {rows, rowsReady, modal} = this.state;


    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Welcome">
        Lets add your first <strong>list </strong> :)
      </Popover>
    )


    if(!rowsReady) {
      return null;
    } else if (rowsReady && rows.length !== 0) {
      return (
        <Row data={rows} />
      )
    } else if(rowsReady && rows.length === 0 && modal === false) {
      return(
        <div className="addRow">
          <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverBottom}>
            <div className="addButton" onClick={this.openModal.bind(this)}></div>
          </OverlayTrigger>
        </div>
       )
    } else {
      return (
        <AddRow submit={this.addRow.bind(this)} />
      )
    }

  }
}
