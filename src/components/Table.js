import React from 'react';

const Table = (props) => {

	const header = props.dataStructure
		.map( item =>  <th key = {item.name}>{item.title}</th>);

	const body = props.data
		.map( item => {
			const row = props.dataStructure
				.map(property => <td key = {property.name}>{item[property.name]}</td>);
        	return  (<tr key = {item.id}>{ row }</tr>);
		});

	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						{header}
					</tr>
				</thead>
				<tbody>
					{body}
				</tbody>
			</table>
		</div>
	)

};

export default Table;
