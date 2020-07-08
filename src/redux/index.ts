import {
  configureStore,
  createSlice,
  createSelector,
  combineReducers,
  PayloadAction,
} from "@reduxjs/toolkit";

const pointsSlice = createSlice({
  name: "points",
  initialState: 0,
  reducers: {
    incrementPoints(state, action: PayloadAction) {
      return state + 1;
    },
    decrementPoints(state, action: PayloadAction) {
      return state - 1;
    },
    resetPoints(state, action: PayloadAction) {
      return 0;
    },
  },
});

export const {
  incrementPoints,
  decrementPoints,
  resetPoints,
} = pointsSlice.actions;

const rootReducer = combineReducers({
  points: pointsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const selectPoints = (state: RootState) => state.points;
