import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

const { setCount } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export function useCount() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return [count, (count) => dispatch(setCount(count))];
}

export function CountProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
