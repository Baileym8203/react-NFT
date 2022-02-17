import react from 'react';
import { Container } from 'react-bootstrap';
import reactDom from 'react-dom';
import MainView from './components/main-view/main-view';

import './index.scss';

class nftApplication extends react.Component {
render () {
return (
<div className="box">
<MainView className="box" />
</div>

  );
 }
}

const container = document.getElementsByClassName('app-container')
[0];

reactDom.render(react.createElement(nftApplication), container);