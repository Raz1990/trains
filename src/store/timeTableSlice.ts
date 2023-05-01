import { RouteEndpoints, TimeTableType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface TimeTable {
  type: TimeTableType;
  station: RouteEndpoints;
}

const initialState: TimeTable = {
  type: "departure",
  station: "basel",
};

const timeTableSlice = createSlice({
  name: "timeTable",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TimeTableType>) => {
      state.type = action.payload;
    },
    setStation: (state, action: PayloadAction<RouteEndpoints>) => {
      state.station = action.payload;
    },
  },
});

export const { setType, setStation } = timeTableSlice.actions;

export default timeTableSlice.reducer;
