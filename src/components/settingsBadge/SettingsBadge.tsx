import s from "./settingsBadge.module.scss";
import IconSettings from "../../assets/setings.svg";

interface BadgeProps {
  onClick: () => void;
}

function SettingsBadge({ onClick }: BadgeProps) {
  return (
    <div className={s.container}>
      <IconSettings className={s.micro} onClick={onClick} />
    </div>
  );
}

export default SettingsBadge;
