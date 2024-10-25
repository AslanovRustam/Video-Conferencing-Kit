export interface IBasicSettings {
  microphoneOn: boolean;
  camera: boolean;
  background: boolean;
}

export interface IDeviceSettings {
  microphone: string;
  video: string;
  loudness: string;
  speakers: string;
}

export interface INotificationSettings {
  peerJoined: boolean;
  peerLeave: boolean;
  newMessage: boolean;
  handRaise: boolean;
  error: boolean;
}

export interface ISettingsState {
  basic: IBasicSettings;
  device: IDeviceSettings;
  notifications: INotificationSettings;
}
