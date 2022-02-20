import react from 'react';
import { Container, Col, Row, Image, ProgressBar, Button, Modal} from 'react-bootstrap';
// all the technology imports!

import OurTeam from '../our-team/our-team';
import FactsAnswers from '../faq/faq';
import ContactMail from '../roadmap-view/roadmap-view';
// All the main file imports!

import './home-view.scss';
// This is the scss file!

import AOS from 'aos'
// AOS will help with the on scroll animations!!

import 'aos/dist/aos.css'
// The AOS dist folder to initialize AOS!

import clown from '../../Images/clown2.png'
import purple from '../../Images/purple.png'
import king from '../../Images/king.png'
import arrow from '../../Images/arrow.png'
// all image imports!

AOS.init(); // the AOS initialize function!

// the start of the home page!
export class HomePage extends react.Component {
render() {

  function MyVerticallyCenteredModal(props) {
    return ( // The modal functions!
      <Modal data-aos="fade-right"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ContactMail/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = react.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)} style={{marginTop: "25px"}}>
         Contact Us
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  // end of modal functions!
  
return ( // start of the return in DOM!
<Container fluid className='' style={{background: ""}}>
<Row className='background-color' style={{textAlign: "center"}} id="up">
<Col data-aos="fade-down" xs={6}>
<h1 className='font' style={{ color: "white", marginTop: "200px"}}>Baby Turtles Club</h1>
<h3 className='font' style={{color: "white",  marginTop: "-5px"}}>What we do?</h3>
<h5 className='font' style={{color: "white",  marginTop: "-5px" }}>
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.
  </h5>
</Col>
<Col data-aos="fade-down" xs={6}>
<h1 className='font' style={{color: "white", marginTop: "200px",}}>Our Trade</h1>
<h3 className='font' style={{ color: "white", marginTop: "-5px"}}>How We Do It?</h3>
<h5 className='font' style={{ color: "white", marginTop: "-5px"}}>
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
<Col data-aos="fade-up" sm={12}>
<h1 className='font' style={{color: "white", marginTop: "150px"}}>NFTs</h1>
<h3 className='font'  style={{color: "white", marginTop: "-5px"}}>Why Buy One?</h3>
<h5 className='font' style={{color: "white", marginTop: "-5px", marginBottom: "50px"}}>
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
<Row id="border" className='background-color2' style={{color: "white", textAlign: "center", border: "solid 1px whitesmoke"}}>
<Col sm={12} style={{border: "solid 1px white fill"}}>
<h1 className='font' data-aos="fade-down" style={{marginTop: "50px", marginBottom: "35px"}}>Roadmap</h1>
<ProgressBar data-aos="flip-down"  animated variant='danger' now={20} />
<h3 data-aos="flip-down" style={{marginTop: "20px"}}>looks after at Q1 2022</h3>
<h5 data-aos="flip-down">Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar data-aos="flip-down" animated  variant='warning' now={40} />
<h3 data-aos="flip-down" style={{marginTop: "20px"}}>looks after at Q2 2022</h3>
<h5 data-aos="flip-down">Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar data-aos="flip-up" animated  variant='primary' now={60} />
<h3 data-aos="flip-up" style={{marginTop: "20px"}}>looks after at Q3 2022</h3>
<h5 data-aos="flip-up">Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
<ProgressBar data-aos="flip-up" animated  variant='success' now={80} />
<h3 data-aos="flip-up" style={{marginTop: "20px"}}>looks after at Q4 2022</h3>
<h5 data-aos="flip-up" style={{marginBottom: "50px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.
  Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
</Col>
</Row>
<Row  id="story" className='background-color3'style={{textAlign: "center"}}>
<Col data-aos="slide-up" md={4}>
<Image fluid  style={{width: '375px', height: '375px', marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={clown}>
</Image>
</Col>
<Col data-aos="slide-up" md={4}>
<Image fluid  style={{width: '375px', height: '375px', marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={purple}>
</Image>
</Col>
<Col data-aos="slide-up" md={4}>
<Image fluid  style={{width: '375px', height: '375px', marginTop: "50px", boxShadow: "2px 0px 15px 6px"}}
src={arrow}>
</Image>
</Col>
</Row>
<Row  className='background-color3'style={{textAlign: "center"}}>
<Col data-aos="slide-up" sm={12}>
<h1 className='font' style={{ color: "white", marginTop: "50px"}}>Our Story</h1>
<h5  className='font' style={{color: "white", marginTop: "-5px", marginBottom: '50px'}}>
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
</Row>
<Row className='background-color'style={{textAlign: "center"}}>
<Col id="team" sm={12}>
<h1 data-aos="fade-up" className='font'  style={{color: "white", marginTop: "50px"}}>Our Team</h1>
</Col>
<Col data-aos="slide-up" sm={4}>
<OurTeam />
</Col>
<Col  data-aos="slide-up"  sm={4}>
<OurTeam />
</Col>
<Col  data-aos="slide-up"  sm={4}>
<OurTeam />
</Col>
<Col  data-aos="slide-up" sm={4} className='margin'>
<OurTeam />
</Col>
<Col data-aos="slide-up" sm={4} className='margin'>
<OurTeam />
</Col>
<Col data-aos="slide-up"  sm={4} className='margin' style={{marginBottom: "50px"}}>
<OurTeam />
</Col>

</Row>
<Row id="faq" className='background-color2'style={{textAlign: "center", fontFamily: "Bubblegum Sans"}}>
<Col sm={12}>
<h1 data-aos="fade-down" className='font'  style={{color: "white", marginTop: "50px"}}>FAQ</h1>
</Col>
<Col data-aos="fade-up" sm={4}>
<FactsAnswers/>
</Col>
<Col data-aos="fade-up" sm={4}>
<FactsAnswers/>
</Col>
<Col data-aos="fade-up" sm={4}>
<FactsAnswers/>
</Col>
<Col data-aos="fade-up" sm={4} >
<FactsAnswers/>
</Col>
<Col data-aos="fade-up" sm={4} >
<FactsAnswers/>
</Col>
<Col data-aos="fade-up" sm={4} >
<FactsAnswers/>
</Col>
<Col sm={12} style={{marginBottom: "50px", marginTop: "10px"}}>
<App />
</Col>
</Row>
</Container>
  );
 }
}
