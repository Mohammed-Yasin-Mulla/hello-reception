interface ToggleSwitchProps {
  setToggle: (toggle: "annually" | "monthly") => void;
}

export function ToggleSwitch(props: ToggleSwitchProps) {
  const { setToggle } = props;

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.target.checked ? "monthly" : "annually");
  };

  return (
    <div className="pricing">
      <span className="toggle-label">Annually</span>
      <label className="switch">
        <input
          type="checkbox"
          className="switch-input"
          onChange={onChangeHandle}
        />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">Monthly</span>
    </div>
  );
}
