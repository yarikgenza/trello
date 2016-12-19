import React, {Component} from 'react';
import {Modal, closeButton, Button} from 'react-bootstrap';


export default class AddRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      modal: true
    }
  }

  close() {
    this.setState({
      modal: false
    })
  }

  render() {
    const {modal} = this.state;

    return(
      <Modal show={modal} dialogClassName="add-row-modal" onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <p>HELLO</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
