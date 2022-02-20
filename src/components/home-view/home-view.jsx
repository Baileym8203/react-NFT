import react from 'react';
import { Container } from 'react-bootstrap';
// all the technology imports!

import SectionZero from './section-zero'; // 1 full Row per section!
import SectionOne from './section-one';
import SectionTwo from '../section-views/section-two';
import SectionThree from '../section-views/section-three';
import SectionFour from '../section-views/section-four';
import SectionFive from '../section-views/section-five';
import SectionSix from '../section-views/section-six';
// all main section imports!

import './home-view.scss';
// This is the scss file!

import AOS from 'aos'
// AOS will help with the on scroll animations!!

import 'aos/dist/aos.css'
// The AOS dist folder to initialize AOS!

AOS.init(); // the AOS initialize function!

// the start of the home page!
export class HomePage extends react.Component {
render() {
  // end of modal functions!

return ( // start of the return in DOM!
<Container fluid className='' style={{background: ""}}>
<SectionZero/>

<SectionOne/>

<SectionTwo/>

<SectionThree/>

<SectionFour/>

<SectionFive/>

<SectionSix/>
</Container>
  );
 }
}
