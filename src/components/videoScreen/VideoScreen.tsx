import s from "./videoScreen.module.scss";
import MicOff from "../../assets/MicOff.svg";
import MicOn from "../../assets/MicOn.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCameraOn,
  selectMicoOn,
  selectUser,
  selectBgOn,
} from "../../redux/selectors";
import { setBasicSettings } from "../../redux/settingsSlice";
import MicBadge from "../micBadge/MicBadge";
import CameraBadge from "../cameraBadge/CameraBadge";
import BackgroundBadge from "../backgroundBadge/BackgroundBadge";
import SettingsBadge from "../settingsBadge/SettingsBadge";
import NameComponent from "../nameComponent/NameComponent";
import { useRef, useState } from "react";

function VideoScreen() {
  const [error, setError] = useState<null | string>(null);
  const [micStream, setMicStream] = useState<MediaStream | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();
  const isMicOn = useSelector(selectMicoOn);
  const isCameraOn = useSelector(selectCameraOn);
  const isBgSelect = useSelector(selectBgOn);
  const name = useSelector(selectUser);

  const handleMicClick = async () => {
    if (!isMicOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setMicStream(stream);
        console.log("Микрофон включен", stream);

        dispatch(setBasicSettings({ microphoneOn: true }));
      } catch (err) {
        setError("Нет доступа к микрофону");
        console.error("Ошибка доступа к микрофону:", err);
      }
    } else {
      if (micStream) {
        micStream.getTracks().forEach((track) => track.stop());
        setMicStream(null);
      }

      dispatch(setBasicSettings({ microphoneOn: false }));
    }
  };

  const handleCameraClick = async () => {
    if (!isCameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setCameraStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        console.log("Камера включена", stream);

        dispatch(setBasicSettings({ camera: true }));
      } catch (err) {
        setError("Нет доступа к камере");
        console.error("Ошибка доступа к камере:", err);
      }
    } else {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
      dispatch(setBasicSettings({ camera: false }));
    }
  };

  const handleBgClick = () => {
    dispatch(setBasicSettings({ background: !isBgSelect }));
  };

  return (
    <section className={s.section}>
      <div className={s.videoContainer}>
        <video ref={videoRef} autoPlay playsInline className={s.video} />
        <button
          type="button"
          className={s.micContainer}
          onClick={handleMicClick}
        >
          {isMicOn ? (
            <MicOn className={s.micro} />
          ) : (
            <MicOff className={s.micro} />
          )}
        </button>
        <div className={s.defaultName}>
          <span className={s.name}>{name}</span>
        </div>
      </div>
      <div className={s.settingsContainer}>
        <ul className={s.list}>
          <li className={s.item}>
            <MicBadge isMicOn={isMicOn} onClick={handleMicClick} />
          </li>
          <li className={s.item}>
            <CameraBadge isCameraOn={isCameraOn} onClick={handleCameraClick} />
          </li>
          <li className={s.item}>
            <BackgroundBadge isBgSelect={isBgSelect} onClick={handleBgClick} />
          </li>
        </ul>
        <SettingsBadge onClick={handleMicClick} />
      </div>
      <NameComponent />
    </section>
  );
}

export default VideoScreen;
