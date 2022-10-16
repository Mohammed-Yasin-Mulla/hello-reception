import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mian-page">
      <h1>Our Pricing</h1>
      <div className="pricing">
        <span>Annually</span>
        <label className="switch">
          <input type="checkbox"  className="switch-input"/>
          <span className="slider"></span>
        </label>
        <span>Monthly</span>
      </div>
    </div>
  );
}

export default App;
