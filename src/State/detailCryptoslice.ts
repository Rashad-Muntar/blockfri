import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface Props {
  name: string;
}

const initialState: Props = { name: "bitcoin" };

const detailSlice = createSlice({
  name: "cryptoDetails",
  initialState,
  reducers: {
    setDetailSlice(state, action) {
      return {...state, name: action.payload };
    },
  },
  extraReducers:{
    [HYDRATE]: (state, action) => {
        if (!action.payload.cryptoDetails) {
            return state;
          }
          return{
            ...state.name,
            ...action.payload.cryptoDetails
          }
    }
  }
});

export const {setDetailSlice} = detailSlice.actions
export const detailReducer = detailSlice.reducer