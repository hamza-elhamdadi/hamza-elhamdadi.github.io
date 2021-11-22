//Layout imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from "react-router-dom";

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import 'isotope-layout';

//Styles imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Art(){
    /*let specs = {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    }*/
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand style={{marginLeft: '10%'}} href="#home">Hamza Elhamdadi</Navbar.Brand>
                <Nav className="mr-auto">
                <NavLink class='nav-link' to='/'>Home</NavLink>
                <NavLink class='nav-link' to="/Publications" >Publications</NavLink>
                <NavLink class='nav-link active' to='/art'>My Art</NavLink>
                </Nav>
            </Navbar>
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                        <Col lg={2}></Col>
                        <Col xs={12} lg={10}>
                            <Row id='grid'></Row>
                        </Col>
                        </Row>
                    </Container>
                </header>
            </div>

            <script>
                $('.grid').isotope(specs) 
            </script>
        </>
    )
}

export default Art;