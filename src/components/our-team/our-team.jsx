import react from 'react';
import { Card, Button, Image } from 'react-bootstrap'
// all technologies used!

import clown from '../../Images/clown2.png'
import instagram from '../../Images/Instagram.png'
import twitter from '../../Images/twiiter.png'
// all imported images!

class OurTeam extends react.Component{
render() {
return (
<Card fluid style={{marginTop: "20px", boxShadow: "black 0px 0px 11px 2px", fontFamily: "Bubblegum Sans"}} >
  <Card.Img variant="top" src={clown} style={{}} />
  <Card.Body style={{backgroundColor: "#e8f6df"}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text style={{color: "black"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="warning">
    <Image src={instagram} style={{width: "40px"}}></Image>
    </Button>
    <Button variant="warning" style={{marginLeft: "5px"}}>
    <Image src={twitter} style={{width: "40px", height: "30px"}}></Image>
    </Button>
  </Card.Body>
</Card>
  );
 };
}

export default OurTeam 
