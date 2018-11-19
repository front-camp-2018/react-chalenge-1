import React, { Component } from 'react';
import Table from './Table';
import Buttons from './Buttons';

export default class SortedTable extends Component {

    constructor (props) {
        super(props);

        this.data = props.data;
        this.dataStructure = props.dataStructure;
        this.dataToShow = this.sortArray(this.data, this.dataStructure[0].name, this.dataStructure[0].sortOrder);
        this.state = {
            isSortedBy: this.dataStructure[0].name
        };
    }

    onClickHandler (event) {
        const {target} = event;
        if ( target.name ) {
            const sortBy = this.dataStructure.find(item => item.name === target.name);
            if (target.name !== this.state.isSortedBy) {
                this.dataToShow = this.sortArray(this.data, sortBy.name, sortBy.sortOrder);
                this.setState({
                    isSortedBy: target.name
                })
            }
        }
    }

    sortArray = (arr, key, order) => {
        return arr
            .slice()
            .sort( (a, b) => { return (a[key] > b[key]) ? order : -order; } )
    };

    render() {
        return (
            <div className="text-center buttons">
                <header className="text-center">
                    <h1>Leaderboard</h1>
                </header>
                <div className="text-center buttons"
                     onClick = {event => this.onClickHandler(event)}
                >
                    <Buttons dataStructure = {this.dataStructure} isSortedBy = {this.state.isSortedBy} />
                </div>

                <div className="text-center buttons">
                    <Table data = {this.dataToShow} dataStructure = {this.dataStructure} />
                </div>
            </div>
        );
    }
}

