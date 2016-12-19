import React, {Component} from 'react';

export default class Row extends Component {

  render() {

    const {data} = this.props;

    return(
      <div>This is a row! and... {JSON.stringify(data)}</div>
    )
  }
}
