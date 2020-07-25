import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Points
export type pointsSliceState = number;
const pointsSliceInitialState = 0 as pointsSliceState;

export const pointsSlice = createSlice({
  name: "points",
  initialState: pointsSliceInitialState,
  reducers: {
    incrementPoints: (state) => {
      return state + 1;
    },
    decrementPoints: (state) => {
      return state - 1;
    },
    resetPoints: (state) => pointsSliceInitialState,
  },
});

// User
export type userSliceState = {
  displayName?: string | null;
  email?: string | null;
} | null;
export interface setUserPayload {
  displayName?: string | null;
  email?: string | null;
}
const userSliceInitialState = null as userSliceState;

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
