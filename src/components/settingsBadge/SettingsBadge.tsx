import { useSelector } from "react-redux";
import IconComponent from "../iconComponent/IconComponent";
import s from "./settingsBadge.module.scss";
import { selectBasicSettings } from "../../redux/selectors";
import { useState } from "react";
import ModalWrapper from "../modalWrapper/ModalWrapper";

interface BadgeProps {
  // onClick: () => void;
}

function SettingsBadge({}: BadgeProps) {
  const basicSettings = useSelector(selectBasicSettings);
  const [isMicAndCamOn, setIsMicAndCamOn] = useState({
    isMicOn: basicSettings.microphoneOn,
    isCamOn: basicSettings.camera,
  });
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    togleModal();
  };

  const togleModal = (): void => {
    setShowModal(!showModal);
  };

  console.log(basicSettings);

  return (
    <div className={s.container}>
      <IconComponent iconName="Settings" onClick={onClick} />
      {showModal && <ModalWrapper>jello</ModalWrapper>}
    </div>
  );
}

export default SettingsBadge;
