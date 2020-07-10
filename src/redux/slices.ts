import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Points
export type pointsSliceState = number;
const pointsSliceInitialState: pointsSliceState = 0;

export const pointsSlice = createSlice({
  name: "points",
  initialState: pointsSliceInitialState,
  reducers: {
    incrementPoints: (state, action) => {
      return state + 1;
    },
    decrementPoints: (state, action) => {
      return state - 1;
    },
    resetPoints: (state) => pointsSliceInitialState,
  },
});

// User
export type userSliceState = { displayName: string; email: string } | null;
export interface setUserPayload {
  displayName?: string | null;
  email?: string | null;
}
const userSliceInitialState: userSliceState = null;

export const userSlice = createSlice({
  name: "user",
  initialState: userSliceInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<setUserPayload>) => {
      const { displayName, email } = action.payload;
      return {
        displayName,
        email,
      };
    },
    resetUser: (state) => userSliceInitialState,
  },
});
