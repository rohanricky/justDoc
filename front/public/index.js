import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';

const render = () => {
ReactDOM.render(
  <AppContainer>
  <App />
  </AppContainer>,
  document.getElementById('root')
  );
}

render();

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const App = require('./App.js').default;
    render(App);
  });
}

registerServiceWorker();
