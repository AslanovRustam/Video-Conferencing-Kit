import s from "./micBadge.module.scss";
import MicOff from "../../assets/MicOff.svg";
import MicOn from "../../assets/MicOn.svg";
import Dots from "../../assets/Dots-Vertical.svg";
import DropDownList from "../dropDown/DropDownList";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface MicBadgeProps {
  onClick: () => Promise<void>;
  isMicOn: boolean;
  micStream: MediaStream | null;
  setMicStream: Dispatch<SetStateAction<MediaStream | null>>;
}

interface AudioDevice {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
  checked: boolean;
}

function MicBadge({
  isMicOn,
  onClick,
  micStream,
  setMicStream,
}: MicBadgeProps) {
  const [devices, setDevices] = useState<AudioDevice[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() не поддерживается.");
      return;
    }

    navigator.mediaDevices
      .enumerateDevices()
      .then(function (devices) {
        // console.log("devices", devices);
        const audioDevices = devices.filter(
          (item) => item.kind === "audioinput"
        );
        const updatedDevices = audioDevices.map((item) => {
          return {
            deviceId: item.deviceId,
            label: item.label,
            kind: item.kind,
            groupId: item.groupId,
            checked: false,
          };
        });

        setDevices(updatedDevices);
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
  }, []);

  const handleClick = async (deviceId: string) => {
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop());
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: deviceId } },
      });
      setMicStream(stream);

      setDevices((prev) =>
        prev.map((item) =>
          item.deviceId === deviceId
            ? { ...item, checked: true }
            : { ...item, checked: false }
        )
      );
    } catch (error) {
      console.error("Ошибка при переключении микрофона:", error);
    }
  };

  const togleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  console.log("showMenu", showMenu);

  return (
    <>
      <div className={s.container}>
        {isMicOn ? (
          <MicOn className={s.micro} onClick={onClick} />
        ) : (
          <MicOff className={s.micro} onClick={onClick} />
        )}
        <div className={s.divider}></div>
        <Dots className={s.dots} onClick={togleMenuClick} />
      </div>
      <DropDownList
        items={devices}
        onClick={handleClick}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </>
  );
}

export default MicBadge;
