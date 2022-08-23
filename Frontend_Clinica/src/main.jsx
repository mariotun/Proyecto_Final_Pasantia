import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import {App} from './routes/App'
//import './index.css'

import {BrowserRouter} from 'react-router-dom';

import {appReducer} from './redux/reducers/appoitmentReducer.js'
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux'

const store = createStore(appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
