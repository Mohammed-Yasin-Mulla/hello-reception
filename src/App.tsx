import { ToggleSwitch } from "./Components/ToggleSwitch";
import { PriceCards } from "./Components/PriceCards";
import "./App.css";

function App() {
  return (
    <div className="mian-page">
      <h1>Our Pricing</h1>
      <ToggleSwitch />
      <PriceCards/>
    </div>
  );
}

export default App;
