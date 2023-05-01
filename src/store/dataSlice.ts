import { ApiDataType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface DataState {
  data: ApiDataType;
  filteredData: ApiDataType;
  availableStations: string[];
}

const initialState: DataState = {
  data: {
    stationName: "",
    stationboard: [],
  },
  filteredData: {
    stationName: "",
    stationboard: [],
  },
  availableStations: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiDataType>) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action: PayloadAction<ApiDataType>) => {
      state.filteredData = action.payload;
    },
    setAvailableStations: (state, action: PayloadAction<string[]>) => {
      state.availableStations = action.payload;
    },
  },
});

export const { setData, setAvailableStations, setFilteredData } =
  dataSlice.actions;

export default dataSlice.reducer;
