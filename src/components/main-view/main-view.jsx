import react from 'react';
import {Container, Col, Row, Button } from 'react-bootstrap';
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

<NavbarView className="a" />
<Container  className="see">
<Row className='center' style={{backgroundColor: "#a3a4fb", border: "solid 1px whitesmoke"}}>
<OurStory />
</Row>
<Row className=" main-view justify-content-md-center">

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
