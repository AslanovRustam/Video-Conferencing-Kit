import { useDispatch } from "react-redux";
import { IAudioDevice } from "../types/streamDevice";
import { setAudio } from "../redux/devicesSlice";

interface UseHandleMicClickProps {
  micStream: MediaStream | null;
  audioDevicesList: IAudioDevice[];
}

const useHandleMicClick = ({
  micStream,
  audioDevicesList,
}: UseHandleMicClickProps) => {
  const dispatch = useDispatch();

  const handleClick = async (deviceId: string): Promise<void> => {
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop());
    }
    try {
      const updatedDevicesList = audioDevicesList.map((item) =>
        item.deviceId === deviceId
          ? { ...item, checked: true }
          : { ...item, checked: false }
      );

      dispatch(setAudio(updatedDevicesList));
    } catch (error) {
      console.error("Ошибка при переключении микрофона:", error);
    }
  };

  return handleClick;
};

export default useHandleMicClick;
