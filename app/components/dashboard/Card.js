import React, {Component} from 'react';


export default class Card extends Component {

  constructor() {
    super();
    this.state = {
      options: false
    }
  }

  deleteCard() {
    const token = localStorage.getItem('token');
    const {data} = this.props;
    const taskId = data._id;

    fetch(`/api/task/${taskId}`, {
      method: 'delete',
      headers: {
        "Content-type": 'application/json',
        "authorization": token
      }
    })
      .then((res) => res.json())
        .then((res) => {
          this.switchOptions();
          this.props.reRender();
        })
      .catch((e) => {console.log(e)})
  }

  completeTask() {
    const token = localStorage.getItem('token');
    const {data} = this.props;
    const taskId = data._id;

    fetch(`/api/task/complete/${taskId}`, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        "authorization": token
      }
    })
      .then((res) => res.json())
        .then((res) => {
          this.switchOptions();
          this.props.reRender();
        })
      .catch((e) => {console.log(e)})
  }


  switchOptions() {
    const {options} = this.state;

    if(!options) {
      this.setState({
        options: true
      })
    } else {
      this.setState({
        options: false
      })
    }
  }

  // render - helpers functions

  getEditedContent() {

    const {data} = this.props;
    const {options} = this.state;
    const {completed} = data;

    if (!completed) {
      return (
        <div className="cardContent">
          {data.content}
        </div>
      )
    } else {
      return (
        <div className="cardContent completed">
          {data.content}
        </div>
      )
    }
  }

  getOptions() {

    const {data} = this.props;
    const {options} = this.state;
    const {completed} = data;

    if (!completed) {
      return (
        <div className="cardOptions">
          <div className="deleteCard" onClick={() => this.deleteCard()}>
            <p>Delete</p>
          </div>
          <div className="completeCard" onClick={() => this.completeTask()}>
            <p>Complete</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="cardOptions">
          <div className="deleteCard fullWidth" onClick={() => this.deleteCard()}>
            <p>Delete</p>
          </div>
        </div>
      )
    }
  }

  render() {

    const {data} = this.props;
    const {options} = this.state;


    if (!options) {
      return (
        <div className="cardContainer">
          <div className="card" onClick={this.switchOptions.bind(this)}>
            {this.getEditedContent()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="cardContainer">
          <div className="card" onClick={this.switchOptions.bind(this)}>
            <div className="cardContent">
              {data.content}
            </div>
          </div>
          {this.getOptions()}
        </div>
      )
    }
  }
}
