export interface IAudioDevice {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
  checked: boolean;
}
