import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import {Provider} from 'react-redux'
import store from './store'
import './index.css';
import {AppContainer} from 'react-hot-loader'
import * as serviceWorker from './serviceWorker';





const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
          <AppContainer>
            <Component/>
          </AppContainer>
        </Provider>,
      document.getElementById('root')
    )
  }
  

render(Route)

serviceWorker.unregister();
