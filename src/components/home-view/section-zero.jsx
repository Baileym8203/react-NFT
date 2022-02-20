import react from 'react';
import {Row, Col} from 'react-bootstrap';

class SectionZero extends react.Component{
render() {
return(
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
  )
 }
}

export default SectionZero;