//Layout imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card'

import { NavLink } from "react-router-dom";

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';

//Styles imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Publications(){
    return (
        <>
            <Navbar className='mx-auto' variant='dark' sticky='top' style={{"backgroundColor": '#c3aeff'}}>
                <Nav >
                <NavLink className='nav-link page-logo active' to="/"></NavLink>
                <NavLink className='nav-link active' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
                <NavLink className='nav-link' to="/publications" ><h5 style={{marginTop: 10}}>Projects</h5></NavLink>
                <NavLink className='nav-link' to='/cv'><h5 style={{marginTop: 10}}>CV</h5></NavLink>
                </Nav>
            </Navbar>
            <div className="App">
                <Container className='mx-auto' style={{color: '#7050a0'}}>
                    <Row>
                    <Col xs={12} lg={8} className='mx-auto'>
                        <Card className='project mx-auto'>
                            <Card.Header className='bckgrnd cardbodytext'>AffectiveTDA: Using Topological Data Analysis to Improve Analysis and Explainability in Affective Computing</Card.Header>
                            <Card.Img src={'/affectiveTDA_teaser.png'} className='teaser' alt='Teaser for AffectiveTDA project'/>
                            <Card.Body className='bckgrnd cardbodytext text-left'>
                                <h4>Abstract:</h4>
                                <p>
                                We present an approach utilizing Topological Data Analysis to study the structure of face poses used in affective computing, i.e., the process of recognizing human emotion. The approach uses a conditional comparison of different emotions, both respective and irrespective of time, with multiple topological distance metrics, dimension reduction techniques, and face subsections (e.g., eyes, nose, mouth, etc.). The results confirm that our topology-based approach captures known patterns, distinctions between emotions, and distinctions between individuals, which is an important step towards more robust and explainable emotion recognition by machines.
                                </p>
                                <a href="https://arxiv.org/abs/2107.08573" target='_' className="bckgrnd stretched-link"></a>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Publications;