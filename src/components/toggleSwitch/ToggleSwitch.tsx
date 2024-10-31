import { type FC } from "react";
import s from "./toggleSwitch.module.scss";

interface ToggleSwitchProps {
  status: boolean;
  onToggle: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ status, onToggle }) => {
  return (
    <div
      className={`${s.toggleSwitch} ${status ? s.on : s.off}`}
      onClick={onToggle}
    >
      <div className={`${s.switchHandle} ${status && s.white}`}></div>
    </div>
  );
};

export default ToggleSwitch;
