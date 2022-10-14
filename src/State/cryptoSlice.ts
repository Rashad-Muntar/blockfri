import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface CryptState {
  data: []
}

const initialState: CryptState = {data:[]};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    SetCryptoList(state, action) {
      return (action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.crypto.data) {
        return state;
      }
      return{
        ...state.data,
        ...action.payload.crypto
      }
      
    },
  },
});

export const { SetCryptoList } = cryptoSlice.actions;
export const cryptoReducer = cryptoSlice.reducer;
