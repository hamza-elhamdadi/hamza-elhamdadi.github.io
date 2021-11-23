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

import { Timeline, Follow } from 'react-twitter-widgets';

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
          <NavLink className='nav-link' to="/publications" ><h5 style={{marginTop: 10}}>Publications</h5></NavLink>
          <NavLink className='nav-link' to='/cv'><h5 style={{marginTop: 10}}>CV</h5></NavLink>
        </Nav>
      </Navbar>
      <div className="App">
          <Container className='mx-auto'>
            <Row>
              <Col xs={10} lg={4} className='text-left mx-auto'>
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
              <Col xs={10} lg={8} >
                <Row style={{marginTop: '10px', color: '#7050a0'}}>
                  <Col className='text-left'>
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
                    Topological Data Analysis. My recent published work applies Topological Data Analysis to Emotion Detection in the field of Affective Computing.
                  </p>
                  </Col>
                  <Col xs={10} lg={6}>
                  <Timeline
                      dataSource={{
                        sourceType: 'profile',
                        screenName: 'ElhamdadiHamza'
                      }}
                      options={{
                        height: '380',
                        chrome: "noheader, nofooter"
                      }}
                    />
                  <Follow username="ElhamdadiHamza" options={{ size: "small" }} />
                  </Col>
                </Row>
                <Row className='text-left' style={{color: '#7050a0'}}>
                  <Col xs={10} lg = {12}>
                  <Card>
                    <Card.Body className='bckgrnd'>
                    <h4>Recent News</h4>
                      <ul class='table-list'>
                        <li class='table-element'>
                          <p>Paper accepted to IEEE Vis 2021 and TVCG</p>
                          <a href='https://www.youtube.com/watch?v=buqJx0w5PiQ' target='_'>Watch my IEEE Vis Presentation here!</a>
                        </li>
                        <li class='table-element element-right'><b>Fall 2021</b></li>
                      </ul>
                      <ul class='table-list'>
                        <li class='table-element'><p>Accepted to Ph.D. program at UMass Amherst</p></li>
                        <li class='table-element element-right'><b>Fall 2021</b></li>
                      </ul>
                      <ul class='table-list'>
                        <li class='table-element'><p>Master of Science Awarded at USF</p></li>
                        <li class='table-element element-right'><b>Summer 2021</b></li>
                      </ul> 
                    </Card.Body>
                  </Card>
                      
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
