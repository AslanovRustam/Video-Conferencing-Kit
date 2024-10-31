export interface IAudioDevice {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
  checked: boolean;
}
export interface IVideoDevice {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
  checked: boolean;
}
export interface IDevacesState {
  audio: IAudioDevice[];
  video: IVideoDevice[];
  audioOutput: IAudioDevice[];
}
