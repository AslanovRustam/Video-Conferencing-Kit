import type { FC } from "react";
import DropDownForm from "../dropDownForm/DropDownForm";
import Devider from "../devider/Devider";
import VolumeSlider from "../progresBar/VolumeSlider";
import s from "./settings.module.scss";
import IconComponent from "../iconComponent/IconComponent";
import { useSelector } from "react-redux";
import { selectVideoDevices } from "../../redux/selectors";
import useHandleMicClick from "../../helpers/useHandleMicClick";
import useHandleCameraClick from "../../helpers/useHandleCameraClick";
import useVideoDevices from "../../helpers/useVideoDevices";
import useAudioDevices from "../../helpers/useAudioDevices";
import useAudioDevicesOutput from "../../helpers/useAudioDevicesOutput";
import useHandleSpeakerClick from "../../helpers/useHandleSpeakerClick";

interface DeviceSettingsTabProps {
  cameraStream: MediaStream | null;
  micStream: MediaStream | null;
}

const DeviceSettingsTab: FC<DeviceSettingsTabProps> = ({
  cameraStream,
  micStream,
}) => {
  const videoDevices = useSelector(selectVideoDevices);
  const videoDevicesList = useVideoDevices();
  const audioDevicesList = useAudioDevices();
  const audioDevicesOutputList = useAudioDevicesOutput();
  const handleCameraClick = useHandleCameraClick({
    cameraStream,
    videoDevicesList,
  });
  const handleMickClick = useHandleMicClick({ micStream, audioDevicesList });
  const handleSpeakerClick = useHandleSpeakerClick({
    speakerStream: micStream,
    audioDevicesOutputList,
  });

  return (
    <>
      <DropDownForm
        title="Video"
        devices={videoDevices}
        onClick={handleCameraClick}
      />
      <Devider />
      <DropDownForm
        title="Microphone"
        devices={audioDevicesList}
        onClick={handleMickClick}
      />
      <VolumeSlider />
      <Devider />
      <div className={s.dynamicContainer}>
        <DropDownForm
          title="Speakers"
          devices={audioDevicesOutputList}
          onClick={handleSpeakerClick}
        />
        <div className={s.speakersTest}>
          <IconComponent iconName="Speakers" />
          <span className={s.test}>Test</span>
        </div>
      </div>
    </>
  );
};

export default DeviceSettingsTab;
