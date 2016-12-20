import React, {Component} from 'react';

export default class Row extends Component {

  render() {

    const {data} = this.props;
    console.table(data)

    return(
      <div>This is a row! and... {data._id}</div>
    )
  }
}
