
export function ToggleSwitch() {
  return (
    <div className="pricing">
      <span>Annually</span>
      <label className="switch">
        <input type="checkbox" className="switch-input" />
        <span className="slider"></span>
      </label>
      <span>Monthly</span>
    </div>
  );
}
