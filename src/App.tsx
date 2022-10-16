import { ToggleSwitch } from "./Components/ToggleSwitch";
import { PriceCards } from "./Components/PriceCards";
import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState<"annually" | "monthly">("annually");

  return (
      <>
        <img src='/bg-top.svg' alt='background' className="bg-top" />
        <img src='/bg-bottom.svg' alt='background' className="bg-bottom"/>
            <div className="main-page">
        <h1 className="page-heading">Our Pricing</h1>
        <ToggleSwitch setToggle={setToggle}/>
        <PriceCards toggle={toggle} />
            </div>
      </>
  );
}

export default App;
