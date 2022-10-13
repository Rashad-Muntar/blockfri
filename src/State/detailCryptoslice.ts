import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface DetailState {
  name: String;
}

const initialState: DetailState = { name: "bitcoin" };

const CryptoDetailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailName(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.detail.name) {
        return state;
      }
      return { ...state, ...action.payload.detail };
    },
  },
});

export const {setDetailName} = CryptoDetailSlice.actions
export const detailReducer = CryptoDetailSlice.reducer
