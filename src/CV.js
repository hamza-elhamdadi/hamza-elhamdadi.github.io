//Layout imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { NavLink } from "react-router-dom";

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';

import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

//Styles imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './App.css';

function CV(){
    return (
        <>
            <Navbar className='mx-auto' variant='dark' sticky='top' style={{"backgroundColor": '#c3aeff'}}>
                <Nav >
                <NavLink className='nav-link page-logo active' to="/"></NavLink>
                <NavLink className='nav-link active' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
                <NavLink className='nav-link' to="/publications" ><h5 style={{marginTop: 10}}>Publications</h5></NavLink>
                <NavLink className='nav-link' to='/cv'><h5 style={{marginTop: 10}}>CV</h5></NavLink>
                </Nav>
            </Navbar>
            <div className="App">
                <Container className='mx-auto'>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
                    <Col xs={12} lg={8} className='mx-auto'>
                    <Viewer fileUrl="/CV-Elhamdadi-2022-Sep-17.pdf" defaultScale={SpecialZoomLevel.PageWidth} />    
                    </Col>
                    
                </Container>
            </div>
        </>
    )
}

export default CV;