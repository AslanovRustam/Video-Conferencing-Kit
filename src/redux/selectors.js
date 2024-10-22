export const selectUser = (state) => state.user.name;
export const selectBasicSettings = (state) => state.settings.basic;
export const selectDeviceSettings = (state) => state.settings.device;
export const selectNotificationsSettings = (state) =>
  state.settings.notifications;
export const selectMicoOn = (state) => state.settings.basic.microphoneOn;
export const selectCameraOn = (state) => state.settings.basic.camera;
export const selectBgOn = (state) => state.settings.basic.background;
