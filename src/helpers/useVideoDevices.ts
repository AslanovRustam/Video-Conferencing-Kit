import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setVideo } from "../redux/devicesSlice";
import { selectVideoDevices } from "../redux/selectors";

const useVideoDevices = () => {
  const dispatch = useDispatch();
  const videoDevicesList = useSelector(selectVideoDevices);

  const fetchAudioDevices = async (dispatch: Dispatch): Promise<void> => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() не поддерживается.");
      return;
    }

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((item) => item.kind === "videoinput");
      const updatedDevices = videoDevices.map((item) => ({
        deviceId: item.deviceId,
        label: item.label,
        kind: item.kind,
        groupId: item.groupId,
        checked: false,
      }));
      dispatch(setVideo(updatedDevices));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (videoDevicesList.length === 0) {
      fetchAudioDevices(dispatch);
    }
  }, [videoDevicesList, dispatch]);

  return videoDevicesList;
};

export default useVideoDevices;
