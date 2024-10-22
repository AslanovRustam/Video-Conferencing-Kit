import s from "./settingsBadge.module.scss";
import IconSettings from "../../assets/setings.svg";

function SettingsBadge({ onClick }) {
  return (
    <div className={s.container}>
      <IconSettings className={s.micro} onClick={onClick} />
    </div>
  );
}

export default SettingsBadge;
