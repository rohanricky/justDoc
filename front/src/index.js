import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import Main from './Main'
import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

const store = createStore(chat)

ReactDOM.render(
  <Provider store={store}>
  <AppContainer>
  <Router>
  <Switch>
  <Route exact path='/' component={Main} />
  <Route exact path='/reqDoc' component={App} />
  </Switch>
  </Router>
  </AppContainer>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
