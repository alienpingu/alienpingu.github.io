import React, { Component } from 'react';
import List from './List';


class App extends Component {
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
        <h1>TODO LIST</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
          <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;