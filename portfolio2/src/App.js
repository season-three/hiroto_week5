import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>;
};

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default App;
