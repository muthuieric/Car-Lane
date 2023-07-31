import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Cars from './components/Cars';
import Navbar from './components/NavBar';

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
      </Switch>
    </div>
    </div>

    </Router>
  );
}

export default App;
