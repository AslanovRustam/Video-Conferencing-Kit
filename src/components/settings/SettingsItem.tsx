import type { FC } from "react";
import IconComponent from "../iconComponent/IconComponent";
import s from "./settings.module.scss";

interface SettingsItemProps {
  text: string;
  iconName: "Settings" | "BellOn";
}

const SettingsItem: FC<SettingsItemProps> = ({ text, iconName }) => {
  return (
    <div className={s.itemContainer}>
      <IconComponent iconName={iconName} />
      <span>{text}</span>
    </div>
  );
};

export default SettingsItem;
