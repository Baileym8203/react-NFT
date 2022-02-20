import { useState } from 'react';
import react from 'react';
import {Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { HomePage } from '../home-view/home-view';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import { NavbarView } from '../navbar/navbar-view';
import './main-view.scss'
import OurStory from '../our-story/our-story'
class MainView extends react.Component{
constructor() {
super()

}

render() {
  return (
  

  
// this will load in the home page in the react dom!
<Router>
<NavbarView />
<Container fluid>
<Row className=" main-view justify-content-md-center background-color">
<OurStory/>
<Routes>
<Route exact path="/" element={<HomePage/>}/>
</Routes>


 

</Row>
</Container>
</Router>
  );
 }
}

export default MainView;
