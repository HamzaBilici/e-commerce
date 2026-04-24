import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

export const store = configureStore({
  reducer: rootReducer,
});

// Store'un kendi tipini ve Dispatch tipini otomatik olarak çıkarıyoruz
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
