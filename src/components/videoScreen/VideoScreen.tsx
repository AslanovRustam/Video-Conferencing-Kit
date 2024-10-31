import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MicBadge from "../micBadge/MicBadge";
import CameraBadge from "../cameraBadge/CameraBadge";
import BackgroundBadge from "../backgroundBadge/BackgroundBadge";
import SettingsBadge from "../settingsBadge/SettingsBadge";
import NameComponent from "../nameComponent/NameComponent";
import Loader from "../loader/Loader";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import { setBasicSettings } from "../../redux/settingsSlice";
import {
  selectCameraOn,
  selectMicoOn,
  selectUser,
  selectBgOn,
} from "../../redux/selectors";
import MicOn from "../../assets/icons/MicOn.svg";
import MicOff from "../../assets/icons/MicOff.svg";
import Avatar from "../../assets/icons/avatar.svg";
import s from "./videoScreen.module.scss";

function VideoScreen() {
  const [error, setError] = useState<null | string>(null);
  const [micStream, setMicStream] = useState<MediaStream | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [showModalPremissions, setShowModalPremissions] = useState(false);
  const [isGoingLife, setIsGoingLife] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();
  const isMicOn = useSelector(selectMicoOn);
  const isCameraOn = useSelector(selectCameraOn);
  const isBgSelect = useSelector(selectBgOn);
  const name = useSelector(selectUser);

  const handleMicClick = async (): Promise<void> => {
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
      return;
    } else {
      if (micStream) {
        micStream.getTracks().forEach((track) => track.stop());
        setMicStream(null);
      }

      dispatch(setBasicSettings({ microphoneOn: false }));
    }
  };

  const handleCameraClick = async (): Promise<void> => {
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
      return;
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

  const handleBgClick = (): void => {
    dispatch(setBasicSettings({ background: !isBgSelect }));
  };

  const checkPermissions = async (): Promise<void> => {
    if (navigator.permissions) {
      try {
        const micStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const camStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        setMicStream(micStream);
        setCameraStream(camStream);

        console.log("Разрешение на доступ к камере и микрофону предоставлено.");

        dispatch(setBasicSettings({ microphoneOn: true, camera: true }));
        setShowModalPremissions(false);
        setIsGoingLife(true);
        if (videoRef.current) {
          videoRef.current.srcObject = camStream;
        }
      } catch (error) {
        console.log("Доступ к камере или микрофону запрещен.");
      }
    } else {
      console.log("API разрешений не поддерживается этим браузером.");
    }
  };

  return (
    <section className={s.section}>
      <div className={`${s.videoContainer} ${isGoingLife && s.isGoingLife}`}>
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
          {name ? (
            <span className={s.name}>{name}</span>
          ) : (
            <Avatar className={s.avatar} />
          )}
        </div>
      </div>
      <div className={s.settingsContainer}>
        <ul className={s.list}>
          <li className={s.item}>
            <MicBadge
              isMicOn={isMicOn}
              onClick={handleMicClick}
              micStream={micStream}
              setMicStream={setMicStream}
            />
          </li>
          <li className={s.item}>
            <CameraBadge
              isCameraOn={isCameraOn}
              onClick={handleCameraClick}
              cameraStream={cameraStream}
              setCameraStream={setCameraStream}
            />
          </li>
          <li className={s.item}>
            <BackgroundBadge isBgSelect={isBgSelect} onClick={handleBgClick} />
          </li>
        </ul>
        <SettingsBadge cameraStream={cameraStream} micStream={micStream} />
      </div>
      <NameComponent
        checkPermissions={checkPermissions}
        showModalPremissions={showModalPremissions}
        setShowModalPremissions={setShowModalPremissions}
      />
      {isGoingLife && (
        <ModalWrapper>
          <div className={s.loaderContainer}>
            <Loader />
            <p className={s.loaderText}>Going live...</p>
          </div>
        </ModalWrapper>
      )}
    </section>
  );
}

export default VideoScreen;
