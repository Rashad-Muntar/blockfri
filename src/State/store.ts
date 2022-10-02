import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { cryptoReducer } from "./cryptoSlice";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { MakeStore } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      crypto: cryptoReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const storeWrapper = createWrapper(makeStore);
