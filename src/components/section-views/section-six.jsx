import react from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap';
import FactsAnswers from '../faq/faq';
import ContactMail from '../roadmap-view/roadmap-view';
class SectionSix extends react.Component{
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
return(
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
  );
 };
}

export default SectionSix;