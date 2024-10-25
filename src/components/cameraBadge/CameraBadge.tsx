import IconComponent from "../iconComponent/IconComponent";
import Dots from "../../assets/icons/Dots-Vertical.svg";
import s from "./cameraBadge.module.scss";

interface CameraBadgeProps {
  onClick: () => Promise<void>;
  isCameraOn: boolean;
}

function CameraBadge({ isCameraOn, onClick }: CameraBadgeProps) {
  return (
    <div className={s.container}>
      {isCameraOn ? (
        <IconComponent iconName="CameraOn" onClick={onClick} />
      ) : (
        <IconComponent iconName="CameraOff" onClick={onClick} />
      )}
      <div className={s.divider}></div>
      <Dots className={s.dots} />
    </div>
  );
}

export default CameraBadge;
