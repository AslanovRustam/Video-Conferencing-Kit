import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import IconComponent from "../iconComponent/IconComponent";
import DropDownList from "../dropDown/DropDownList";
import useAudioDevices from "../../helpers/useAudioDevices";
import useHandleMicClick from "../../helpers/useHandleMicClick";
import Dots from "../../assets/icons/Dots-Vertical.svg";
import s from "./micBadge.module.scss";

interface MicBadgeProps {
  onClick: () => Promise<void>;
  isMicOn: boolean;
  micStream: MediaStream | null;
  setMicStream: Dispatch<SetStateAction<MediaStream | null>>;
}

function MicBadge({
  isMicOn,
  onClick,
  micStream,
}: // setMicStream,
MicBadgeProps) {
  const [showMenu, setShowMenu] = useState(false);
  const audioDevicesList = useAudioDevices();
  const handleClick = useHandleMicClick({ micStream, audioDevicesList });

  const togleMenuClick = (e: MouseEvent): void => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  console.log("audioDevicesList", audioDevicesList);

  return (
    <>
      <div className={`${s.container} ${isMicOn && s.active}`}>
        <IconComponent
          iconName={isMicOn ? "MicOn" : "MicOff"}
          onClick={onClick}
        />
        <div className={s.divider}></div>
        <Dots className={s.dots} onClick={togleMenuClick} />
      </div>

      {audioDevicesList[0]?.deviceId && (
        <DropDownList
          items={audioDevicesList}
          onClick={handleClick}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </>
  );
}

export default MicBadge;
