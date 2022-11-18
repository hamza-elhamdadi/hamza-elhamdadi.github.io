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

import cards from './publications.json'

function createCard(data){
    return <Card key={data.key} className='project' >
    <Card.Header className='bckgrnd cardbodytext hdr'>{data.paperName}</Card.Header>
    <Card.Img src={data.img} className='teaser' alt={data.altText}/>
    <Card.Body className='bckgrnd cardbodytext text-left'>
        <p><b>{data.authors}</b></p>
        <h6>Abstract:</h6>
        <p>{data.abstract}</p>
        <h6>Venue: {data.venue}</h6>
        <a href={data.link} target='_' className="bckgrnd stretched-link"></a>
        <p className={`tags ${data.tagType}`}></p>
    </Card.Body>
    
</Card>
    
}

function Publications(){
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
                <Container className='mx-auto' style={{color: '#7050a0'}}>
                    <Row>
                    <Col xs={12} lg={8} className='mx-auto'>
                    {cards.map(createCard)}
                    </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Publications;