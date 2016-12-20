import React, {Component} from 'react';
import {Modal, closeButton, Button, Form, FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';


export default class AddRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      modal: true,
      name: ''
    }
  }

  inputHandler(e) {
    this.setState({
      name: e.target.value
    })
  }

  close() {
    this.setState({
      modal: false
    })
    this.props.close();
  }

  submit() {
    const {name} = this.state;
    this.props.submit(name);
  }

  render() {
    const {modal} = this.state;

    return(
      <Modal show={modal} dialogClassName="add-row-modal" onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={(e) => {e.preventDefault(); this.submit()}} horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={6}>
                <FormControl type="text" onChange={this.inputHandler.bind(this)} placeholder="e.g. Daily tasks" />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle='primary' onClick={this.submit.bind(this)}>Submit</Button>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
