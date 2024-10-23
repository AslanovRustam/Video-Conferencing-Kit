import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BasicSettings,
  DeviceSettings,
  NotificationSettings,
  SettingsState,
} from "../types/interfaces";

const initialState: SettingsState = {
  basic: { microphoneOn: false, camera: false, background: false },
  device: { microphone: "", video: "", loudness: "", speakers: "" },
  notifications: {
    peerJoined: true,
    peerLeave: true,
    newMessage: true,
    handRaise: true,
    error: true,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBasicSettings: (
      state,
      action: PayloadAction<Partial<BasicSettings>>
    ) => {
      state.basic = { ...state.basic, ...action.payload };
    },
    setDeviceSettings: (
      state,
      action: PayloadAction<Partial<DeviceSettings>>
    ) => {
      state.device = { ...state.device, ...action.payload };
    },
    setNotificationsSettings: (
      state,
      action: PayloadAction<Partial<NotificationSettings>>
    ) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
  },
});

export const { setBasicSettings, setDeviceSettings, setNotificationsSettings } =
  settingsSlice.actions;
export default settingsSlice.reducer;
