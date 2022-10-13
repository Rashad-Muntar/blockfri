import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { cryptoReducer } from "./cryptoSlice";
// import { historyReducer } from "./cryptohistory";
// import { detailReducer } from "./detailCryptoslice";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      crypto: cryptoReducer,
      // history: historyReducer,
      // detail: detailReducer
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
