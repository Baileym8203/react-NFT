import react from 'react';
import { Carousel, Image, Container} from 'react-bootstrap';

import './our-story.scss'

// these are both the Carousel images imported!
import astro from '../../Images/astro.png'

import clown from '../../Images/clown.png'

class OurStory extends react.Component{
render() {
return(
<Container sm={12}>
<Carousel touch={true} fade={true} className="look">
  <Carousel.Item interval={6000}>
    <Image
      className="d-block w-100"
      src={clown}
      alt="First slide"
      style={{width: "110em", height: "43em",}}>
    </Image>
    <Carousel.Caption className='text'>
      <h3>Baby Turtles Club</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000} className="looks">
    <img
      className="d-block w-100"
      src={astro}
      alt="Second slide"
      style={{width: "110em", height: "43em"}}
    />
    <Carousel.Caption className='text'>
      <h3>The Future of NFTs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
)
}
}
export default OurStory;