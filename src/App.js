import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content" >
          <Route exact path='/' component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={Projects} />
        </div> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
