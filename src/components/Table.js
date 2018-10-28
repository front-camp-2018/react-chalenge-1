import React, {Component} from 'react';
import {userData} from '../data';
import Users from './Users';

export default class Table extends Component {

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
					<Users usersData={userData} sortBy={this.props.sortBy}></Users>
				</thead>
				<tbody></tbody>
			</table>
		</div>)
	}
}
