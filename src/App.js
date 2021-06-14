import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Switch>
   <Route component={Homepage} exact path='/' />
   <Route component={AboutMe} path='/about' />
   <Route component={Work} path='/work' />
   <Route component={Contact} path='/contact' />

   </Switch>
   
   </BrowserRouter>
  );
}

export default App;
