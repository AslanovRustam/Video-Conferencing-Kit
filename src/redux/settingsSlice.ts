import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IBasicSettings,
  IDeviceSettings,
  INotificationSettings,
  ISettingsState,
} from "../types/interfaces";

const initialState: ISettingsState = {
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
      action: PayloadAction<Partial<IBasicSettings>>
    ) => {
      state.basic = { ...state.basic, ...action.payload };
    },
    setDeviceSettings: (
      state,
      action: PayloadAction<Partial<IDeviceSettings>>
    ) => {
      state.device = { ...state.device, ...action.payload };
    },
    setNotificationsSettings: (
      state,
      action: PayloadAction<Partial<INotificationSettings>>
    ) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
  },
});

export const { setBasicSettings, setDeviceSettings, setNotificationsSettings } =
  settingsSlice.actions;
export default settingsSlice.reducer;
