import React, {Component} from 'react';
import {userData} from '../data';

export default class Table extends Component {
	constructor() {
    super()
    this.state = {
      filterBy: ''
    }
  }

	componentWillUpdate(nextProps) {
		const { filterBy } = this.state;
		if (filterBy !== nextProps.filterBy) this.setState({ filterBy: nextProps.filterBy });
	}

	getAllUsers = () => {
		const { filterBy } = this.state;
		let data = userData;

    switch(filterBy) {
      case 'age':
        data = data.sort((a,b) => a.age - b.age);
        break;

      case 'name':
        data = data.sort((a,b) => a.name.localeCompare(b.name));
        break;

      case 'points':
        data = data.sort((a,b) => b.points - a.points);
        break;

      case 'rank':
        data = data.sort((a,b) => a.rank - b.rank);
        break;
    }

		return data.map((user, index) => {
			return (
				<tr key={`bodyRow-${index}`}>
					<th>{user.age}</th>
					<th>{user.name}</th>
					<th>{user.points}</th>
					<th>{user.rank}</th>
				</tr>
			);
		})
	}

	render() {
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>{this.getAllUsers()}</tbody>
			</table>
		</div>)
	}
}
