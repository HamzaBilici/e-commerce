import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: !((globalThis as any).process?.env?.NODE_ENV === "production"),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
