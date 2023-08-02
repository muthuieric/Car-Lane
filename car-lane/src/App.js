import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Cars from './components/CarList';
import Navbar from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="relative flex flex-col items-center justify-center h-screen">
    <Navbar />     
     <div>
      <Switch>
        <Route exact path="/">
          <Home />   
        </Route>
        <Route path="/cars">
          <Cars />
        </Route>
        <Route path="/contacts">
          <Contact />
        </Route>
      </Switch>
    </div>
    </div>

    </Router>
  );
}

export default App;
