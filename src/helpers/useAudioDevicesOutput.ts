import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setAudioOutput } from "../redux/devicesSlice";
import { selectAudioDevicesOutput } from "../redux/selectors";

const useAudioDevicesOutput = () => {
  const dispatch = useDispatch();
  const audioDevicesOutputList = useSelector(selectAudioDevicesOutput);

  const fetchAudioDevices = async (dispatch: Dispatch): Promise<void> => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() не поддерживается.");
      return;
    }

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log("devices", devices);

      const audioDevices = devices.filter(
        (item) => item.kind === "audiooutput"
      );
      const updatedDevices = audioDevices.map((item) => ({
        deviceId: item.deviceId,
        label: item.label,
        kind: item.kind,
        groupId: item.groupId,
        checked: false,
      }));
      dispatch(setAudioOutput(updatedDevices));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (audioDevicesOutputList.length === 0) {
      fetchAudioDevices(dispatch);
    }
  }, [audioDevicesOutputList, dispatch]);

  return audioDevicesOutputList;
};

export default useAudioDevicesOutput;
