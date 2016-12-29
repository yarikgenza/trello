import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Row extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  formSubmit(e) {
    e.preventDefault();
    this.setState({
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {

    const {data} = this.props;

    return(
      <div className="rowBox">
        <div className="rowNameField">
          <div className="rowName">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="taskList">
          <div className="card">
            <div className="cardContent">
              Create awesome project and publish it on GitHub
            </div>
          </div>
        </div>
        <div className="rowForm">
          <form onSubmit={this.formSubmit.bind(this)}>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={this.state.inputValue}
                placeholder="Enter text"
                onChange={this.handleChange.bind(this)}
              />
            <FormControl.Feedback />
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}
