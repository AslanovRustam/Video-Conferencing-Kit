import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user.name;
export const selectBasicSettings = (state: RootState) => state.settings.basic;
export const selectDeviceSettings = (state: RootState) => state.settings.device;
export const selectNotificationsSettings = (state: RootState) =>
  state.settings.notifications;
export const selectMicoOn = (state: RootState) =>
  state.settings.basic.microphoneOn;
export const selectCameraOn = (state: RootState) => state.settings.basic.camera;
export const selectBgOn = (state: RootState) => state.settings.basic.background;
