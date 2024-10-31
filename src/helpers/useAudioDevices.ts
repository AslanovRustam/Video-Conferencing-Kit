import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setAudio } from "../redux/devicesSlice";
import { selectAudioDevices } from "../redux/selectors";

const useAudioDevices = () => {
  const dispatch = useDispatch();
  const audioDevicesList = useSelector(selectAudioDevices);

  const fetchAudioDevices = async (dispatch: Dispatch): Promise<void> => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() не поддерживается.");
      return;
    }

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioDevices = devices.filter((item) => item.kind === "audioinput");
      console.log("audioDevices", audioDevices);

      const updatedDevices = audioDevices.map((item) => ({
        deviceId: item.deviceId,
        label: item.label,
        kind: item.kind,
        groupId: item.groupId,
        checked: false,
      }));
      dispatch(setAudio(updatedDevices));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (audioDevicesList.length === 0) {
      fetchAudioDevices(dispatch);
    }
  }, [audioDevicesList, dispatch]);

  return audioDevicesList;
};

export default useAudioDevices;
