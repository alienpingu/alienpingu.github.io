import React, { Component } from 'react';
import './Piece.css';


class Piece extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { value, style } = this.props.metaData;
    return (
      <div className={style}>

        <h1>{value}</h1>
      </div>
      );
  }
}
export default Piece;

