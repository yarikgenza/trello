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

  getRowList() {
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

  addRow(name) {
    const {token} = this.props;

    fetch('/api/row', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
          "authorization": token
        },
        body: JSON.stringify({
          name: name
        })
      })
      .then((json) => {return json.json()})
          .then((msg) => {
            console.log(msg);
            this.setState({
              modal: false
            })
            this.getRowList();
          })
      .catch((e) => {console.log(e)})

  }

  componentDidMount() {
    this.getRowList()
  }

  openModal() {
    this.setState({
      modal: true
    })
  }

  closeModal() {
    this.setState({
      modal: false
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
    } else if (rowsReady && rows.length !== 0 && rows.length !== 4 && modal === false) {

        const parsedRows = rows.map((item, index) => {
          return (
            <Row key={index} data={item} />
          )
        })

        return (
          <div className="rowsContainer">
            {parsedRows}
            <div className="addRow notAlone">
                <div className="addButton" onClick={this.openModal.bind(this)}></div>
            </div>
          </div>
        )
    } else if(rowsReady && rows.length === 0 && modal === false) {
      return(
        <div className="addRow">
          <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverBottom}>
            <div className="addButton" onClick={this.openModal.bind(this)}></div>
          </OverlayTrigger>
        </div>
       )
    } else if(rowsReady && rows.length === 4) {
      const parsedRows = rows.map((item, index) => {
        return (
          <Row key={index} data={item} />
        )
      })

      return (
        <div className="rowsContainer">
          {parsedRows}
        </div>
      )
    }  else {
      return (
        <AddRow close={this.closeModal.bind(this)} submit={this.addRow.bind(this)} />
      )
    }

  }
}
