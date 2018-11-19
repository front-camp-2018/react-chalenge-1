import React, { Component } from 'react';
import {userData} from './data';
import SortedTable from './components/SortedTable';

export default class App extends Component {

    constructor () {
        super();
        this.userData = this.addIdToData(userData);
    }

    addIdToData = (arr) => {
        return [...arr].map((item, idx) => Object.assign(item, {id: idx}))
    };

    dataStructure = [
        { name: 'age', title: 'Age', sortOrder: 1 }, // sortOrder: 1 -  increasing; 0 - don't sort; -1 - decreasing
        { name: 'name', title: 'Name', sortOrder: 1 },
        { name: 'points', title: 'Points', sortOrder: -1 },
        { name: 'rank', title: 'Rank', sortOrder: 1 }
    ];

    render() {
        return (
             <SortedTable
                 data = {this.userData}
                 dataStructure = {this.dataStructure}
             />
        );
    }
}

