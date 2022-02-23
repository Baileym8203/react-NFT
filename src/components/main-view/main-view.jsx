
import react from 'react';
import {Container, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// these are all imported technologies!

import OurStory from '../our-story/our-story'
import { NavbarView } from '../navbar/navbar-view';
import { HomePage } from '../home-view/home-view';
// all imported files!

class MainView extends react.Component{ // start of MainView component!
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
