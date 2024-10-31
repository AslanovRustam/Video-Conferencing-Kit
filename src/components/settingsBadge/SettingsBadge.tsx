import { useSelector } from "react-redux";
import IconComponent from "../iconComponent/IconComponent";
import s from "./settingsBadge.module.scss";
import { selectBasicSettings } from "../../redux/selectors";
import { useState } from "react";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import Settings from "../settings/Settings";

interface BadgeProps {
  cameraStream: MediaStream | null;
  micStream: MediaStream | null;
}
interface MicAndCamState {
  isMicOn: boolean;
  isCamOn: boolean;
}
function SettingsBadge({ cameraStream, micStream }: BadgeProps) {
  const basicSettings = useSelector(selectBasicSettings);
  const [isMicAndCamOn, setIsMicAndCamOn] = useState<MicAndCamState>({
    isMicOn: basicSettings.microphoneOn,
    isCamOn: basicSettings.camera,
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClick = () => {
    togleModal();
  };

  const togleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <div className={s.container}>
      <IconComponent iconName="Settings" onClick={onClick} />
      {showModal && (
        <ModalWrapper>
          <Settings
            closeModal={onClick}
            cameraStream={cameraStream}
            micStream={micStream}
          />
        </ModalWrapper>
      )}
    </div>
  );
}

export default SettingsBadge;
