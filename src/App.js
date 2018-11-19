import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filterBy: ''
    }
  }

  changeFilter = (value) => {
    this.setState({ filterBy: value });
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age changeFilter={this.changeFilter}></Age>
          <Name changeFilter={this.changeFilter}></Name>
          <Points changeFilter={this.changeFilter}></Points>
          <Rank changeFilter={this.changeFilter}></Rank>
        </div>
        <div className="text-center buttons">
          <Table filterBy={this.state.filterBy}></Table>
        </div>
      </div>
    );
  }
}
