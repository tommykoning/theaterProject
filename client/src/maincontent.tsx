import { modalUnstyledClasses } from '@mui/material';
import React, {useState, useEffect} from 'react';

let count : number = 0;

function doDecrement() {
    if(count == 0) {
        alert("Kan niet lager dan 0 gaan!");
        return;
    }
    
    count--;

}

function doIncrement() {
    count++;
    console.log(count);
}

function update() {
    while(1) {
        return count;
    }
}

const mainContent = () => {
      return(
        <div className="maincontent">
            <div id="list">

            </div>
            <div id="selector">
                <button id="decrement" onClick={doDecrement}>-</button>
                <span id="count">{count}</span>
                <button id="increment" onClick={doIncrement}>+</button>
            </div>
            <div id="result">
            </div>
        </div>
      );
}
  
export default mainContent;
  