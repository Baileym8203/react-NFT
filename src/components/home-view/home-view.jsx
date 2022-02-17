import react from 'react';
import ReactPlayer from 'react-player';
import { Container, Col, Row, Image, ProgressBar} from 'react-bootstrap';

import './home-view.scss';

import clown from '../../Images/clown2.png'
import purple from '../../Images/purple.png'
import king from '../../Images/king.png'
 
export class HomePage extends react.Component {
render() {
return (
<Container fluid className='back'>
<Row className='background-color' style={{textAlign: "center"}} id="up">
<Col sm={6}>
<h1 className='font' style={{backgroundColor: "#e8f6df", marginTop: "100px", marginLeft: "5px", boxShadow: "2px 4px 15px 6px"}}>Baby Turtles Club</h1>
<h3 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px"}}>What we do?</h3>
<h5 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px"}}>
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h5>
</Col>
<Col sm={6}>
<h1 className='font' style={{backgroundColor: "#e8f6df", marginTop: "100px", marginLeft: "5px", boxShadow: "2px 4px 15px 6px"}}>Our Trade</h1>
<h3 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px"}}>How We Do It?</h3>
<h5 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px"}}>
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h5>
</Col>
</Row>
<Row className='background-color' style={{textAlign: 'center'}}>
<Col sm={12}>
<h1 className='font' style={{backgroundColor: "#e8f6df", marginTop: "100px", marginLeft: "5px", boxShadow: "2px 4px 15px 6px"}}>NFTs</h1>
<h3 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px"}}>Why Buy One?</h3>
<h5 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px", marginBottom: "50px"}}>
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h5>
</Col>
</Row>
<Row className='background-color2' style={{textAlign: "center", border: "solid 1px whitesmoke"}}>
<Col sm={12} style={{border: "solid 1px white fill"}}>
<h1 className='font' id="border" style={{marginTop: "50px", marginBottom: "35px"}}>Roadmap</h1>
<ProgressBar animated variant='danger' now={20} />
<h3>looks after at Q1 2022</h3>
<h5>Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar animated  variant='warning' now={40} />
<h3>looks after at Q2 2022</h3>
<h5>Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar animated  variant='primary' now={60} />
<h3>looks after at Q3 2022</h3>
<h5>Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar animated  variant='success' now={80} />
<h3>looks after at Q4 2022</h3>
<h5 style={{marginBottom: "50px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
</Col>
</Row>
<Row className='background-color3'style={{textAlign: "center"}}>
<Col lg={4}>
<Image fluid  style={{width: '375px', height: '375px', marginLeft: "5px", marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={clown}>
</Image>
</Col>
<Col lg={4}>
<Image fluid  style={{width: '375px', height: '375px', marginLeft: "5px", marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={purple}>
</Image>
</Col>
<Col lg={4}>
<Image fluid  style={{width: '375px', height: '375px', marginLeft: "5px", marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={king}>
</Image>
</Col>
</Row>
<Row className='background-color3'style={{textAlign: "center"}}>
<Col sm={12}>
<h1 className='font' id="story" style={{backgroundColor: "#e8f6df", marginTop: "50px", marginLeft: "5px", boxShadow: "2px 4px 15px 6px"}}>Our Story</h1>
<h5 className='font' style={{backgroundColor: "#e8f6df", marginLeft: "5px", marginTop: "-5px", boxShadow: "2px 0px 15px 6px", marginBottom: '50px'}}>
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h5>
</Col>
<Col sm={4}>
</Col>
</Row>
</Container>
  );
 }
}
