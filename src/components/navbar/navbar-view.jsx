import react from 'react';

import {Navbar, Container, Nav, Image } from 'react-bootstrap';

import clown from '../../Images/clown3.png'

import discord from '../../Images/discord.png'

import twitter from '../../Images/twitter.png'
import './navbar-view.scss';

import { HashLink as Link } from 'react-router-hash-link'

 export class NavbarView extends react.Component {
 render() {
 
 // this function will change the navbar based on scroll as well as screen size!
  let lastScrollY = window.scrollY;
 
 window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
 document.querySelector('.nav').classList.add('hidden')
 document.getElementById('basic-navbar-nav').classList.add('justify')
 
  } else {
  document.querySelector('.nav').classList.remove('hidden')
  document.getElementById('basic-navbar-nav').classList.remove('justify')

  } if ( window.screen.width <= 990) {
    document.querySelector('.nav').classList.remove('hidden')
    document.getElementById('basic-navbar-nav').classList.remove('justify')
  }
 
  

  lastScrollY = window.scrollY;
 });

 

// start of navbar!
 return (
<Navbar bg="primary"className='color' style={{position: "sticky", display: "flex", justifyContent: "space-between"}} fixed="top" expand="lg">
  <Container fluid id="navbar" >
    <Navbar.Brand style={{color: 'white'}} href="/"><Image src={clown} style={{width:"55px", height: "55px" }}></Image></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="show" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto nav">
        <Link className='font size' id="center" style={{color: 'white'}}  to="#team" smooth>Our Team</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#story" smooth>Our Story</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#faq" smooth>FAQ</Link>
        <Link  className='font size' id="center" style={{color: 'white'}} to="#border" smooth>Roadmap</Link>
        </Nav>
        <Link to="#t">
        <Image id="log" className='twitter' src={twitter} style={{width: "2.5em", height: '2.0em', marginRight: "10px"}}/>
        </Link>
        <Link to="#y">
        <Image id="log" className='discord' src={discord} style={{width: "2.5em", height: '1.7em'}}/>
      </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
   );
  }
 }
