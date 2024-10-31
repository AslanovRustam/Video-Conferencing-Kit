import { useDispatch } from "react-redux";
import { IVideoDevice } from "../types/streamDevice";
import { setVideo } from "../redux/devicesSlice";

interface UseHandleCameraClickProps {
  cameraStream: MediaStream | null;
  videoDevicesList: IVideoDevice[];
}

const useHandleCameraClick = ({
  cameraStream,
  videoDevicesList,
}: UseHandleCameraClickProps) => {
  const dispatch = useDispatch();

  const handleClickVideo = async (deviceId: string): Promise<void> => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
    }
    try {
      const updatedDevicesList = videoDevicesList.map((item) =>
        item.deviceId === deviceId
          ? { ...item, checked: true }
          : { ...item, checked: false }
      );

      dispatch(setVideo(updatedDevicesList));
    } catch (error) {
      console.error("Ошибка при переключении камеры:", error);
    }
  };

  return handleClickVideo;
};

export default useHandleCameraClick;
