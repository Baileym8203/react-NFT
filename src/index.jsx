import react from 'react';
import reactDom from 'react-dom';
// all imported technologies!

import MainView from './components/main-view/main-view';
// all imported files!


class nftApplication extends react.Component { //start of render for index component to send to html!
render () {
return (

<MainView/>


  );
 }
}

const container = document.getElementsByClassName('app-container')
[0];

reactDom.render(react.createElement(nftApplication), container);