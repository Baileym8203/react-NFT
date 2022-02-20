import react from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';
 
class SectionTwo extends react.Component {
render() {
return (
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
)
}
}

export default SectionTwo;