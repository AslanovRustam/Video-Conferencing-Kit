import { Dispatch, SetStateAction, useState } from "react";
import IconComponent from "../iconComponent/IconComponent";
import DropDownList from "../dropDown/DropDownList";
import useVideoDevices from "../../helpers/useVideoDevices";
import Dots from "../../assets/icons/Dots-Vertical.svg";
import s from "./cameraBadge.module.scss";
import useHandleCameraClick from "../../helpers/useHandleCameraClick";

interface CameraBadgeProps {
  onClick: () => Promise<void>;
  isCameraOn: boolean;
  cameraStream: MediaStream | null;
  setCameraStream: Dispatch<SetStateAction<MediaStream | null>>;
}

function CameraBadge({
  isCameraOn,
  onClick,
  cameraStream,
  setCameraStream,
}: CameraBadgeProps) {
  const [showMenu, setShowMenu] = useState(false);
  const videoDevicesList = useVideoDevices();
  const handleClick = useHandleCameraClick({
    cameraStream,
    videoDevicesList,
  });

  const togleMenuClick = (e: MouseEvent): void => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`${s.container} ${isCameraOn && s.active}`}>
        <IconComponent
          iconName={isCameraOn ? "CameraOn" : "CameraOff"}
          onClick={onClick}
        />
        <div className={s.divider}></div>
        <Dots className={s.dots} onClick={togleMenuClick} />
      </div>
      {videoDevicesList[0]?.deviceId && (
        <DropDownList
          items={videoDevicesList}
          onClick={handleClick}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </>
  );
}

export default CameraBadge;
