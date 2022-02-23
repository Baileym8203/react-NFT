import react from 'react';
import { Carousel, Image, Container} from 'react-bootstrap';
// all technologies imported!


import './our-story.scss'
// scss file imported!

// these are the Carousel images imported!
import purple from '../../Images/purple.png'
import clown2 from '../../Images/clown2.png'
import king from '../../Images/king.png'

class OurStory extends react.Component{
render() {
return(

<Carousel touch fade className="look" style={{marginTop: "75px", boxShadow: "2px 2px 10px 7px", borderRadius: '15px', width: "35em"}}>
  <Carousel.Item interval={6000}>
    <Image
      className="d-block w-100"
      src={clown2}
      alt="First slide"
      style={{  borderRadius: '15px'}}>
    </Image>
    <Carousel.Caption className='text'>
      <h3>Baby Turtles Club</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <Image
      className="d-block w-100"
      src={purple}
      alt="Second slide"
      style={{ borderRadius: '15px'}}>
    </Image>
    <Carousel.Caption className='text'>
      <h3>The Future of NFTs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1500} className="looks">
    <Image
      className="d-block w-100"
      src={king}
      alt="Second slide"
      style={{ borderRadius: '15px'}}>
    </Image>
    <Carousel.Caption className='text'>
      <h3>We Mint Our Own!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
 };
}
export default OurStory;