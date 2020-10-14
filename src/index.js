import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import routes from './routes.js'

class App extends React.Component {
  render(){
    return(
      <div>
      {routes.map((index, key) => (
        <Route key={key} exact={index.utama} path={index.link} component={index.halaman} />
      ))}
      </div>

    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();