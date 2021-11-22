import React from 'react';
import { NavLink } from "react-router-dom";

//Layout imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card'

import MailTo from './components/MailTo';

//Navbar imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Styles imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
      <Navbar className='mx-auto' variant='dark' sticky='top' style={{"backgroundColor": '#c3aeff'}}>
        <Nav >
          <NavLink className='nav-link page-logo active' to="/"></NavLink>
          <NavLink className='nav-link active' to="/" ><h5 style={{marginTop: 10}}>Home</h5></NavLink>
          <NavLink className='nav-link' to="/publications" ><h5 style={{marginTop: 10}}>Projects</h5></NavLink>
        </Nav>
      </Navbar>
      <div className="App">
          <Container className='mx-auto'>
            <Row>
              <Col xs={8} lg={4} className='text-left mx-auto'>
              <Card className='cropped'>
                <Card.Img src={'/IMG_7839_Original.jpg'} alt="Hamza Elhamdadi" />
                <Card.Body className='bckgrnd cardbodytext'>
                    <h1>Hamza Elhamdadi</h1>
                    <p>HCI-VIS Lab - Department of Computer Science</p>
                    <p>University of Massachusetts Amherst</p>
                    <MailTo>
                      Email me: helhamdadi 'at' umass.edu
                    </MailTo>
                </Card.Body>
              </Card>
              </Col>
              <Col xs={12} lg={8} >
                <Row style={{marginTop: '10px', color: '#7050a0'}}>
                  <Col className='text-left' >
                  <h2>About Me</h2>
                  <p>
                    I am a doctoral student in the <a style={{'margin': 0}} target='_' href='https://groups.cs.umass.edu/hci-vis/'> HCI-Vis Lab</a>&nbsp;
                    at the <a style={{'margin': 0}} target="_" href="https://www.umass.edu"> University of Massachusetts Amherst</a>. I joined UMass
                    in the Fall of 2021. I received my Master's and Bachelor's degrees from the Computer Science and Engineering
                    at the <a style={{'margin': 0}} target='_' href='https://usf.edu'>University of South Florida</a>.
                  </p>
                  <p>
                    I am currently pursuing a Ph.D. under the advising of <a style={{'margin': 0}} target='_' href='https://cyxiong.com'>Dr. Cindy Xiong</a>.
                    My research interests in the area of Data & Information Visualization include Perception in Visualization and
                    Topological Data Visualization. I am investigating positive and negative framing as they relate to Data
                    Visualization.
                  </p>
                  </Col>
                </Row>
                <Row style={{marginTop: '10px', color: '#7050a0'}}>
                  <Col className='text-left'>
                  <h2>Publications</h2>
                  <ul>
                      <li>AffectiveTDA: Using Topological Data Analysis to Improve Analysis and Explainability in Affective Computing - <b>Hamza Elhamdadi, Shaun Canavan, Paul Rosen</b> - IEEE Transactions on Visualization and Computer Graphics, 2021</li>
                      <li>Recognizing Emotion in the Wild using Multimodal Data - <b>S. Srivastava, S. Aathreya, S. Hinduja, Sk R. Jannat, H. Elhamdadi, and S. Canavan</b> - International Conference on Multimodal Interaction, 2020</li>
                  </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>
    </>
    
  );
}

export default App;
