import React, { Component } from 'react';
import tachyons from 'tachyons';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
  	event.preventDefault();
  	if (this.state.term.length > 0) {
  	    this.setState({
  	      term: '',
  	      items: [...this.state.items, this.state.term]
  	    });
      }
  }




  render() {
    return (
      <div>
        <h1 className='f1'>TODO LIST</h1>
        <form className='fl w-100' onSubmit={this.onSubmit}>
          <input className='fl w-80 tc' value={this.state.term} onChange={this.onChange} />
          <button className='fl w-20 dim'>Submit</button>
        </form>
          <List items={this.state.items}/>
      </div>
    );
  }
}