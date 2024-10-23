import s from "./cameraBadge.module.scss";
import CameraOff from "../../assets/cameraOff.svg";
import CameraOn from "../../assets/cameraOn.svg";
import Dots from "../../assets/Dots-Vertical.svg";

interface CameraBadgeProps {
  onClick: () => Promise<void>;
  isCameraOn: boolean;
}

function CameraBadge({ isCameraOn, onClick }: CameraBadgeProps) {
  return (
    <div className={s.container}>
      {isCameraOn ? (
        <CameraOn className={s.micro} onClick={onClick} />
      ) : (
        <CameraOff className={s.micro} onClick={onClick} />
      )}
      <div className={s.divider}></div>
      <Dots className={s.dots} />
    </div>
  );
}

export default CameraBadge;
