import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./media.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
