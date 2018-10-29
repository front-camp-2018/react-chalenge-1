import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: null,
    };
  }

  handleSorting (type) {
    this.setState({
      sortBy: type,
    })
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onClick={()=>{this.handleSorting('age')}}></Age>
          <Name onClick={()=>{this.handleSorting('name')}}></Name>
          <Points onClick={()=>{this.handleSorting('points')}}></Points>
          <Rank onClick={()=>{this.handleSorting('rank')}}></Rank>
        </div>
        <div className="text-center buttons">
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

