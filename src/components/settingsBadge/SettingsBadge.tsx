import IconComponent from "../iconComponent/IconComponent";
import s from "./settingsBadge.module.scss";

interface BadgeProps {
  onClick: () => void;
}

function SettingsBadge({ onClick }: BadgeProps) {
  return (
    <div className={s.container}>
      <IconComponent iconName="Settings" onClick={onClick} />
    </div>
  );
}

export default SettingsBadge;
