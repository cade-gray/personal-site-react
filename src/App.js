import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./lib/ScrollToTop";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
