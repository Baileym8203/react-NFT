import react from 'react';

import {Navbar, Container, Nav, Image, Button} from 'react-bootstrap';

import clown from '../../Images/clown.png'

import discord from '../../Images/discord.png'

import twitter from '../../Images/twitter.png'

import './navbar-view.scss';

import { HashLink as Link } from 'react-router-hash-link'

 export class NavbarView extends react.Component {
 render() {
 return (
<Navbar bg="primary"className='color' style={{position: "sticky"}} fixed="top" expand="lg">
  <Container fluid>
    <Navbar.Brand style={{color: 'white'}} href="/"><Image src={clown} style={{width:"100px", height: "100px" }}></Image></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Link className='font size' id="center" style={{color: 'white'}}  to="#">Our Team</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#story" smooth>Our Story</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#" smooth>FAQ</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#border" smooth>Roadmap</Link>
        <Nav>
        <Nav.Link href="#t">
        <Image className='move-right' src={twitter} style={{width: "3em", height: '3.2em'}}/>
        </Nav.Link>
        <Nav.Link href="#y">
        <Image className='move-left' src={discord} style={{width: "3em", height: '2.6em'}}/>
      </Nav.Link>
      </Nav>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   );
  }
 }
