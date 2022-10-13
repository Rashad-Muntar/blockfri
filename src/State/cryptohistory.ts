import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface CryptState {
  data: [];
}

const initialState: CryptState = { data: [] };

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistorySlice(state, action) {
      return action.payload;
    },
  },
  extraReducers:{
    [HYDRATE]: (state, action) => {
        if (!action.payload.history.data) {
            return state;
          }
          return{
            ...state.data,
            ...action.payload.history
          }
    }
  }
});

export const {setHistorySlice} = historySlice.actions
export const historyReducer = historySlice.reducer