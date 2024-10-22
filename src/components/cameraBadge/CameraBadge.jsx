import s from "./cameraBadge.module.scss";
import CameraOff from "../../assets/cameraOff.svg";
import CameraOn from "../../assets/cameraOn.svg";
import Dots from "../../assets/Dots-Vertical.svg";

function CameraBadge({ isCameraOn, onClick }) {
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
