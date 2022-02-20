import react from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import clown from '../../Images/clown2.png'
import purple from '../../Images/purple.png'
import arrow from '../../Images/arrow.png'

class SectionTwo extends react.Component {
render() {
return (
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
)
}
}

export default SectionTwo;

