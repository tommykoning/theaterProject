import { modalUnstyledClasses } from '@mui/material';
import React, {useState, useEffect} from 'react';
import './TicketPagina.css';

const Header = () => {
    return (
      <header>
        <nav className="topnav">
          <ul>
            <li>
              <a href="#" id="logo"></a>
            </li>
            <li>
              <a href="#" id="Ticketbtn">Tickets</a>
            </li>
            <li>
              <a href="#" id="loginbtn"></a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;