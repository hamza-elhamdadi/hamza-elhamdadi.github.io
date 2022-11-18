import React from 'react';
import { NavLink } from "react-router-dom";

//Layout imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Container fluid className='mx-auto' style={{margin: '1rem 3rem 0 3rem'}}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={4} xl={4} className='text-center mx-auto'>
                <div className='cropped mx-auto'>
                  <img src={'/IMG_7839_Original.jpg'} className='profile' alt="Hamza Elhamdadi"></img>
                </div>
                <div className='bckgrnd cardbodytext mx-auto'>
                <h1>Hamza Elhamdadi</h1>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={5} xl={4} className='mx-auto' >
                <Row style={{marginTop: '10px', color: '#7050a0'}}>
                  <Col lg={12} className='text-left mx-auto'>
                  <h2>About Me</h2>
                  <p style={{marginBottom: 10}}>
                    I am a doctoral student in the <a style={{'margin': 0}} target='_' href='https://groups.cs.umass.edu/hci-vis/'> HCI-Vis Lab</a>&nbsp;
                    at the <a style={{'margin': 0}} target="_" href="https://www.umass.edu"> University of Massachusetts Amherst</a>. I joined UMass
                    in the Fall of 2021. I received my Master's and Bachelor's degrees from the Computer Science and Engineering
                    at the <a style={{'margin': 0}} target='_' href='https://usf.edu'>University of South Florida</a>.
                  </p>
                  <p style={{marginBottom: '10%'}}>
                    I am currently pursuing a Ph.D. under the advising of <a style={{'margin': 0}} target='_' href='https://cyxiong.com'>Dr. Cindy Xiong</a>.
                    My research interests in the area of Data & Information Visualization include Perception in Visualization and
                    Topological Data Analysis. My recent published work applies Topological Data Analysis to Emotion Detection in the field of Affective Computing.
                  </p>
                  </Col>
                </Row>
                <Row className='text-left mx-auto' style={{color: '#7050a0'}}>
                  <Col className='bckgrnd cardbodytext' style={{marginBottom: '10%'}} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h4>Recent News</h4>
                      <ul className='table-list'>
                        <li className='table-element'>
                          <p>Paper accepted to IEEE Vis 2021 and TVCG</p>
                        </li>
                        <li className='table-element element-right'><b>Fall 2021</b></li>
                      </ul>
                      <ul className='table-list'>
                        <li className='table-element'>
                        <a href='https://www.youtube.com/watch?v=buqJx0w5PiQ' target='_' style={{textAlign: 'right'}}>Watch my IEEE Vis Presentation here!</a>
                        </li> 
                      </ul>
                      
                      <ul className='table-list'>
                        <li className='table-element'><p>Accepted to Ph.D. program at UMass Amherst</p></li>
                        <li className='table-element element-right'><b>Fall 2021</b></li>
                      </ul>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} xl={4}>
                  <Timeline
                            dataSource={{
                              sourceType: 'profile',
                              screenName: 'ElhamdadiHamza'
                            }}
                            options={{
                              height: '600vh',
                              chrome: "noheader, nofooter"
                            }}
                          />
                  <Follow username="ElhamdadiHamza" options={{ size: "small" }} />
                  
              </Col>
            </Row>
          </Container>
      </div>
    </>
    
  );
}

export default App;
