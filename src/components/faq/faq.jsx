import react from 'react';
import {Accordion} from 'react-bootstrap';

class FactsAnswers extends react.Component {
render() {
return(
<Accordion defaultActiveKey="0" style={{boxShadow: "black 0px 0px 15px 0px", background: "#e8f6df", marginTop: "40px"}} flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header style={{boxShadow: "black 0px 0px 15px 2px"}}>Where do I Buy?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1">
    <Accordion.Header style={{boxShadow: "black 0px 0px 15px 0px"}}>How do I contact You?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  );
 };
}

export default FactsAnswers
