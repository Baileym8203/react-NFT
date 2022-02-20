import react from 'react';
import {Row, Col} from 'react-bootstrap';
import OurTeam from '../our-team/our-team';
class SectionFive extends react.Component{
render() {
return(

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
  )
 }
}

export default SectionFive;