import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Row extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      tasks: ''
    }
  }

  componentDidUpdate() {
      let elArr = document.getElementsByClassName("scrl");
      for(let index of elArr) {
        index.scrollTop += 9999
      }
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks() {
    const token = localStorage.getItem('token');
    const {data} = this.props;

    fetch('/api/task', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
          "authorization": token
        },
        body: JSON.stringify({
          row: data._id
        })
      })
      .then((json) => {return json.json()})
          .then((list) => {
            this.setState({
              tasks: list
            })
          })
      .catch((e) => {console.log(e)})
  }


  formSubmit(e) {
    e.preventDefault();
    this.setState({
      inputValue: ''
    })

    const token = localStorage.getItem('token');
    const {inputValue} = this.state;
    const {data} = this.props;

    if(inputValue.length !== 0) {
      fetch('/api/task/add', {
          method: 'post',
          headers: {
            "Content-type": "application/json",
            "authorization": token
          },
          body: JSON.stringify({
            content: inputValue,
            row: data._id
          })
        })
        .then((json) => {return json.json()})
            .then((msg) => {
              this.getTasks();
            })
        .catch((e) => {console.log(e)})
    }
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {

    const {tasks} = this.state;
    const {data} = this.props;

    const getTasks = () => {
      if(tasks.length !== 0) {
        let parsedTasks = tasks.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardContent">
                {item.content}
              </div>
            </div>
          )
        })
        return parsedTasks;
      } else {
        return null;
      }
    }



    return(
      <div className="rowBox">
        <div className="rowNameField">
          <div className="rowName">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="taskList scrl">
          {getTasks()}
        </div>
        <div className="rowForm">
          <form autoComplete="off" onSubmit={this.formSubmit.bind(this)}>
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
