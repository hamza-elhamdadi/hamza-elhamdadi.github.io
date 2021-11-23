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
                <NavLink className='nav-link' to="/publications" ><h5 style={{marginTop: 10}}>Publications</h5></NavLink>
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
                                <p><b>Hamza Elhamdadi, Shaun Canavan, Paul Rosen</b></p>
                                <h6>Abstract:</h6>
                                <p>
                                We present an approach utilizing Topological Data Analysis to study the structure of face poses used in affective computing, i.e., the process of recognizing human emotion. The approach uses a conditional comparison of different emotions, both respective and irrespective of time, with multiple topological distance metrics, dimension reduction techniques, and face subsections (e.g., eyes, nose, mouth, etc.). The results confirm that our topology-based approach captures known patterns, distinctions between emotions, and distinctions between individuals, which is an important step towards more robust and explainable emotion recognition by machines.
                                </p>
                                <a href="https://arxiv.org/pdf/2107.08573.pdf" target='_' className="bckgrnd stretched-link"></a>
                            </Card.Body>
                            
                        </Card>
                        <Card className='project mx-auto'>
                            <Card.Header className='bckgrnd cardbodytext'>Recognizing Emotion in the Wild using Multimodal Data</Card.Header>
                            <Card.Body className='bckgrnd cardbodytext text-left'>
                                <p><b>Shivam Srivastava, Saandeep Aathreya, Saurabh Hinduja, Sk Rahatul Jannat, Hamza Elhamdadi, and Shaun Canavan</b></p>
                                <h6>Abstract:</h6>
                                <p>
                                In this work, we present our approach for all four tracks of the eighth Emotion Recognition in the Wild Challenge (EmotiW 2020).
                                The four tasks are group emotion recognition, driver gaze prediction, predicting engagement in the wild, and emotion recognition
                                using physiological signals. We explore multiple approaches including classical machine learning tools such as random forests, state
                                of the art deep neural networks, and multiple fusion and ensemblebased approaches. We also show that similar approaches can be
                                used across tracks as many of the features generalize well to the
                                different problems (e.g. facial features). We detail evaluation results
                                that are either comparable to or outperform the baseline results for
                                both the validation and testing for most of the tracks.
                                </p>
                                <a href="https://dl.acm.org/doi/pdf/10.1145/3382507.3417970" target='_' className="bckgrnd stretched-link"></a>
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