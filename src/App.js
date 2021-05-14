import "./App.css";

import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="websiteName">Recipes by Judy</div>
        <div className="row align-items-center">
          <div className="col">
            <a href="favorites.js">favorites</a>
          </div>
          <div className="col">Beef</div>
          <div className="col">Chicken</div>
        </div>
        <div className="row align-items-center">
          <div className="col">Vegetarian</div>
          <div className="col">Fish</div>
          <div className="col">Turkey</div>
        </div>
        <div className="row align-items-center">
          <div className="col">Pork</div>
          <div className="col">Slow Cooker</div>
          <div className="col">Sides</div>
        </div>
        <div className="row align-items-center">
          <div className="col">Desserts</div>
        </div>
      </div>
    </div>
  );
}

export default App;
