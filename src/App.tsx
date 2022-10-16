import { ToggleSwitch } from "./Components/ToggleSwitch";
import { PriceCards } from "./Components/PriceCards";
import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState<"annually" | "monthly">("annually");

  return (
    <div className="main-page">
      <h1>Our Pricing</h1>
      <ToggleSwitch setToggle={setToggle}/>
      <PriceCards toggle={toggle} />
    </div>
  );
}

export default App;
