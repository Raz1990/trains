import { configureStore } from "@reduxjs/toolkit";
import timeTableReducer from "./timeTableSlice";
import dataReducer from "./dataSlice";
import { dataApi } from "./dataApi";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    timeTable: timeTableReducer,
    dataApi: dataApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(dataApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
