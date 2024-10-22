import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    basic: { microphoneOn: false, camera: false, background: false },
    device: { microphone: "", video: "", loudness: "", speakers: "" },
    notifications: {
      peerJoined: true,
      peerLeave: true,
      newMessage: true,
      handRaise: true,
      error: true,
    },
  },
  reducers: {
    setBasicSettings: (state, { payload }) => {
      state.basic = { ...state.basic, ...payload };
    },
    setDeviceSettings: (state, { payload }) => {
      state.device = { ...state.device, ...payload };
    },
    setNotificationsSettings: (state, { payload }) => {
      state.notifications = { ...state.notifications, ...payload };
    },
  },
});

export const { setBasicSettings, setDeviceSettings, setNotificationsSettings } =
  settingsSlice.actions;
export default settingsSlice.reducer;
