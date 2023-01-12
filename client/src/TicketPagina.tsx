import { modalUnstyledClasses } from '@mui/material';
import React, {useState, useEffect} from 'react';
import './TicketPagina.css';
import Header from './Header';
import Maincontent from './maincontent';

const body = () => {
  return (
    <>
    <Header/>
    <Maincontent/>
    </>
  );
}

export default body;