import React, { Component } from 'react';

class TheaterOverzicht extends Component {
    render() { 
        const data =[{"name":"test1"},{"name":"test2"}];
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

        return (
            <div>
            {listItems }
            </div>
        );
    }
}
 
export default TheaterOverzicht;