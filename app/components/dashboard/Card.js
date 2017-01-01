import React, {Component} from 'react';


export default class Card extends Component {

  constructor() {
    super();
    this.state = {
      options: false
    }
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

  render() {

    const {data} = this.props;
    const {options} = this.state;


    if (!options) {
      return (
        <div className="cardContainer">
          <div className="card" onClick={this.switchOptions.bind(this)}>
            <div className="cardContent">
              {data.content}
            </div>
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
          <div className="cardOptions">
            <div className="deleteCard">
              <p>Delete</p>
            </div>
            <div className="completeCard">
              <p>Complete</p>
            </div>
          </div>
        </div>
      )
    }
  }
}
