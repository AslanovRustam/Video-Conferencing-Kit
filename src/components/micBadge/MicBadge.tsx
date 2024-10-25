import { Dispatch, SetStateAction, useEffect, useState } from "react";
import IconComponent from "../iconComponent/IconComponent";
import DropDownList from "../dropDown/DropDownList";
import { IAudioDevice } from "../../types/streamDevice";
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
  setMicStream,
}: MicBadgeProps) {
  const [devices, setDevices] = useState<IAudioDevice[]>([]);
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

  const handleClick = async (deviceId: string): Promise<void> => {
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

  const togleMenuClick = (): void => {
    setShowMenu(!showMenu);
  };
  console.log("showMenu", showMenu);

  return (
    <>
      <div className={s.container}>
        {isMicOn ? (
          <IconComponent iconName="MicOn" onClick={onClick} />
        ) : (
          <IconComponent iconName="MicOff" onClick={onClick} />
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
