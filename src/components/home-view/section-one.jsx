import react from 'react';
import {Row, Col} from 'react-bootstrap';

class SectionOne extends react.Component{
render() {
return(
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
  )
 }
}

export default SectionOne;