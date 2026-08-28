import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WaveField from "./components/WaveField/WaveField";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./lib/ScrollToTop";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WaveField />
      <div className="App">
        <Header />
        <main className="App__main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
