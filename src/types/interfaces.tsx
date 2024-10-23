export interface TitleProps {
  text: string;
}

export interface BasicSettings {
  microphoneOn: boolean;
  camera: boolean;
  background: boolean;
}

export interface DeviceSettings {
  microphone: string;
  video: string;
  loudness: string;
  speakers: string;
}

export interface NotificationSettings {
  peerJoined: boolean;
  peerLeave: boolean;
  newMessage: boolean;
  handRaise: boolean;
  error: boolean;
}

export interface SettingsState {
  basic: BasicSettings;
  device: DeviceSettings;
  notifications: NotificationSettings;
}
