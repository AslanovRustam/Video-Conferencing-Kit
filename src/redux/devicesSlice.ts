import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAudioDevice,
  IDevacesState,
  IVideoDevice,
} from "../types/streamDevice";

const initialState: IDevacesState = {
  audio: [],
  video: [],
  audioOutput: [],
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setAudio: (state, action: PayloadAction<IAudioDevice[]>) => {
      state.audio = [...action.payload];
    },
    setVideo: (state, action: PayloadAction<IVideoDevice[]>) => {
      state.video = [...action.payload];
    },
    setAudioOutput: (state, action: PayloadAction<IAudioDevice[]>) => {
      state.audioOutput = [...action.payload];
    },
  },
});

export const { setAudio, setVideo, setAudioOutput } = devicesSlice.actions;
export default devicesSlice.reducer;
