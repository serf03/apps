import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cuentas from './component/Cuentas';

const App = () => {
  return (
         <Router>
           <Switch>
           <Route path="/Home">
                <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/Cuentas">
              <Cuentas />
            </Route>
          </Switch>
         </Router>
  )
}

export default App;
