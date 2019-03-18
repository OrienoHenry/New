import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Absenceform from './components/Absenceform';
import Teamview from './components/Teamview';

class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/absenceform' component={Absenceform} />
            <Route path='/teamview' component={Teamview} />

            </div>


          </BrowserRouter>
     
    );
  }
}

export default App;
