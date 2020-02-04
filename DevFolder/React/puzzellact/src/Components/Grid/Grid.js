import React, { Component } from 'react';
import './Grid.css';


const GameRule = [
  
    {
      moves: ["2C","2E"],
      value: '0',
      index: "1D",
      style: 'active'
    },
    {
      moves: ["2C","3B"],
      value: '1',
      index: "2A",
      style: 'active'
    },
    {
      moves: ["1D","2A","3D"],
      value: '2',
      index: "2C",
      style: 'active'
    },
    {
      moves: ["1D","2G","3F"],
      value: '3',
      index: "2E",
      style: 'active'
    },
    {
      moves: ["2E","3F"],
      value: '4',
      index: "2G",
      style: 'active'
    },
    {
      moves: ["2A","4A"],
      value: '5',
      index: "3B",
      style: 'active'
    },
    {
      moves: ["2C","2E","4C","4E"],
      value: '6',
      index: "3D",
      style: 'active'
    },
    {
      moves: ["2G","4G"],
      value: '7',
      index: "3F",
      style: 'active'
    },
    {
      moves: ["3B","4C"],
      value: '8',
      index: "4A",
      style: 'active'
    },
    {
      moves: ["3D","4A","5D"],
      value: '9',
      index: "4C",
      style: 'active'
    },
    {
      moves: ["3D","4G","5D"],
      value: '10',
      index: "4E",
      style: 'active'
    },
    {
      moves: ["4E","3F"],
      value: '11',
      index: "4G",
      style: 'active'
    },
    {
      moves: ["4C","4E"],
      value:'12',
      index: "5D",
      style: 'active'
    }
]


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rule: GameRule
    };
  }



  indexZero () {
      const pieces = this.state.rule.slice()
      let indexOfArray = pieces.findIndex(obj => obj.value === "0")
      return indexOfArray
    }

  swapValue(f, s) {
    let protoState = this.state
    protoState.rule[s].value = [protoState.rule[f].value, protoState.rule[f].value = protoState.rule[s].value][0];
    this.setState(protoState);

   
  }
  passData(i) {
    let p = this.state.rule.slice();
    return p[i];
  }
  tryMove(i) {
      const pieces = this.state.rule.slice()
      pieces[i].moves.map( move => move === pieces[this.indexZero()].index ? this.swapValue(i, this.indexZero()) : null);
  }


  render() {
    return(
        <div className="grid-container">
            <div></div>
            <div></div>
            <div></div>
            <div
              className={this.state.rule[0].style}
              id={this.state.rule[0].index}       
              onClick = {() => this.tryMove(0)}
            >
            <h1>{this.state.rule[0].value}</h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div 
              className={this.state.rule[1].style} 
              id={this.state.rule[1].index}       
              onClick = {() => this.tryMove(1)}
            >
              <h1>{this.state.rule[1].value}</h1>

              </div>
            <div></div>
            <div 
              className={this.state.rule[2].style}
              id={this.state.rule[2].index}
              onClick = {() => this.tryMove(2)}
            >
              <h1>{this.state.rule[2].value}</h1>
            </div>
            <div></div>
            <div 
              className={this.state.rule[3].style}
              id={this.state.rule[3].index}
              onClick = {() => this.tryMove(3)}

            >
            <h1>{this.state.rule[3].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[4].style}
              id={this.state.rule[4].index}
              onClick = {() => this.tryMove(4)}

            >
            <h1>{this.state.rule[4].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[5].style}
              id={this.state.rule[5].index}
              onClick = {() => this.tryMove(5)}

            >
            <h1>{this.state.rule[5].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[6].style}
              id={this.state.rule[6].index}
              onClick = {() => this.tryMove(6)}

            >
            <h1>{this.state.rule[6].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[7].style}
              id={this.state.rule[7].index}
              onClick = {() => this.tryMove(7)}

            >
            <h1>{this.state.rule[7].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[8].style}
              id={this.state.rule[8].index}
              onClick = {() => this.tryMove(8)}

            >
            <h1>{this.state.rule[8].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[9].style}
              id={this.state.rule[9].index}
              onClick = {() => this.tryMove(9)}

            >
            <h1>{this.state.rule[9].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[10].style}
              id={this.state.rule[10].index}
              onClick = {() => this.tryMove(10)}

            >
            <h1>{this.state.rule[10].value}</h1>
              </div>
            <div></div>
            <div 
              className={this.state.rule[11].style}
              id={this.state.rule[11].index}
              onClick = {() => this.tryMove(11)}

            >
              <h1>{this.state.rule[11].value}</h1>
              </div>
            <div></div>
            <div></div>
            <div></div>
            <div 
              className={this.state.rule[12].style}
              id={this.state.rule[12].index}
              onClick = {() => this.tryMove(12)}

            >
              <h1>{this.state.rule[12].value}</h1>
              </div>
            <div></div>
            <div></div>
            <div></div>
        </div>


    );
  }
}

export default Grid;