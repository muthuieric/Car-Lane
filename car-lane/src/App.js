import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import ArtworkList from './components/ArtWorkList';

function App() {
  return (
    <Router>
    <div >
    <Navbar />     
     <div>
      <Switch>
        <Route exact path="/">
          <Home />   
        </Route>
        <Route path="/art">
          <ArtworkList />
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
