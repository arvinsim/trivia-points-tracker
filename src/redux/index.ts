import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pointsSlice, userSlice } from "./slices";

//  Actions
export const {
  incrementPoints,
  decrementPoints,
  resetPoints,
} = pointsSlice.actions;

export const { setUser, resetUser } = userSlice.actions;

// Reducers
const rootReducer = combineReducers({
  points: pointsSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Root State
export type RootState = ReturnType<typeof rootReducer>;

// selectors
export const selectPoints = (state: RootState) => state.points;
export const selectUser = (state: RootState) => state.user;
