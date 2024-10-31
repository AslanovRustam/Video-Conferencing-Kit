import { useDispatch } from "react-redux";
import { IAudioDevice } from "../types/streamDevice";
import { setAudioOutput } from "../redux/devicesSlice"; // предполагается, что экшен для динамиков существует и называется setAudioOutput

interface UseHandleSpeakerClickProps {
  speakerStream: MediaStream | null;
  audioDevicesOutputList: IAudioDevice[];
}

const useHandleSpeakerClick = ({
  speakerStream,
  audioDevicesOutputList,
}: UseHandleSpeakerClickProps) => {
  const dispatch = useDispatch();

  const handleClick = async (deviceId: string): Promise<void> => {
    if (speakerStream) {
      speakerStream.getTracks().forEach((track) => track.stop());
    }
    try {
      const updatedDevicesList = audioDevicesOutputList.map((item) =>
        item.deviceId === deviceId
          ? { ...item, checked: true }
          : { ...item, checked: false }
      );

      dispatch(setAudioOutput(updatedDevicesList));
    } catch (error) {
      console.error("Ошибка при переключении динамиков:", error);
    }
  };

  return handleClick;
};

export default useHandleSpeakerClick;
