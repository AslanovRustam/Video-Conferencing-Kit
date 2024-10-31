import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import settingReducer from "./settingsSlice";
import userReducer from "./userSlice";
import deviceReducer from "./devicesSlice";
import sessionReducer from "./sessionSlice";

const persistSettingsConfig = {
  key: "settings",
  version: 1,
  storage,
};
const persisUserConfig = {
  key: "user",
  version: 1,
  storage,
};
const persisDeviceConfig = {
  key: "device",
  version: 1,
  storage,
};

const persistedSettingsReducer = persistReducer(
  persistSettingsConfig,
  settingReducer
);
const persistedUserReducer = persistReducer(persisUserConfig, userReducer);
const persistedDeviceReducer = persistReducer(
  persisDeviceConfig,
  deviceReducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    settings: settingReducer,
    devices: persistedDeviceReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
