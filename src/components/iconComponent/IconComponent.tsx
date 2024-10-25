import type { FC } from "react";
import MicOff from "../../assets/icons/MicOff.svg";
import MicOn from "../../assets/icons/MicOn.svg";
import CameraOff from "../../assets/icons/cameraOff.svg";
import CameraOn from "../../assets/icons/cameraOn.svg";
import IconBg from "../../assets/icons/bg.svg";
import Settings from "../../assets/icons/setings.svg";
import s from "./iconComponent.module.scss";

interface IconComponentProps {
  onClick: () => void;
  selectedClass?: boolean;
  iconName:
    | "MicOn"
    | "MicOff"
    | "CameraOff"
    | "CameraOn"
    | "IconBg"
    | "Settings";
}

const IconComponent: FC<IconComponentProps> = ({
  onClick,
  iconName,
  selectedClass,
}) => {
  const icons = { MicOn, MicOff, CameraOff, CameraOn, IconBg, Settings };
  const Icon = icons[iconName];

  return Icon ? (
    <Icon
      className={`${s.micro} ${selectedClass && s.selected}`}
      onClick={onClick}
    />
  ) : null;
};

export default IconComponent;
