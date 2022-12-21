import React, { Component } from 'react';
import NestedModal from './components/TheaterModal';

export class TheaterOverzicht extends Component {
    render() { 
        const data =[{"name":"test1"},{"name":"test2"}, {"name":"test3"}];
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

        return (
            <div>
            {listItems }
            </div>
        );
    }
}