"use client";

import { ApiDataType } from "@/app/types/types";
import { extractDestinationList } from "@/app/utils/utils";
import {
  setAvailableStations,
  setData,
  setFilteredData,
} from "@/store/dataSlice";
import { store } from "@/store/store";
import { useRef } from "react";

function Preloader({ data }: { data: ApiDataType }) {
  const loaded = useRef(false);

  if (!loaded.current) {
    loaded.current = true;
    store.dispatch(setData(data));
    store.dispatch(setFilteredData(data));
    store.dispatch(
      setAvailableStations(extractDestinationList(data.stationboard))
    );
  }

  return null;
}

export default Preloader;
