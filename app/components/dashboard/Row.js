import React, {Component} from 'react';

export default class Row extends Component {

  render() {

    const {data} = this.props;
    console.log(data);

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
              <p></p>
            </div>
          </div>
        </div>
        <div className="rowForm">

        </div>
      </div>
    )
  }
}
