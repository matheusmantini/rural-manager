import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import producersReducer from "./features/Producer";
import { iProducerState } from "../types";

export type RootState = {
  producers: iProducerState;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, producersReducer);

const store = configureStore({
  reducer: {
    producers: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
