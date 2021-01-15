import './App.css'
import React, { Component } from 'react'
import { Table } from './Components';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numRows: 4,
      numCols: 4,
    }
    this.addRow = this.addRow.bind(this)
    this.addCol = this.addCol.bind(this)
  }

  addRow() {
    this.setState({numRows: this.state.numRows+1});
  }

  addCol() {
    this.setState({numCols: this.state.numCols+1});
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.addCol}>Add Row</button>
          <button onClick={this.addRow}>Add Column</button>
          <select id='colors' onChange={this.changeColor}>
            <option value='white'>White</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
          </select>
        </div>
        <Table 
          numRows={this.state.numRows}
          numCols={this.state.numCols}
        />
      </div>
    )
  }

}

export default App;