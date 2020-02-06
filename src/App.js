import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './Pages/About';
import Home from './Pages/Home';
// import Search from './Pages/Search';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/search' component={Search} /> */}
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
