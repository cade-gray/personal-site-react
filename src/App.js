import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./Logo/Logo";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer/Footer";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Logo />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
