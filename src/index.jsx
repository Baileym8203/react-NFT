import react from 'react';
import { Container } from 'react-bootstrap';
import reactDom from 'react-dom';
import MainView from './components/main-view/main-view';

import './index.scss';

class nftApplication extends react.Component {
render () {
return (

<MainView />


  );
 }
}

const container = document.getElementsByClassName('app-container')
[0];

reactDom.render(react.createElement(nftApplication), container);