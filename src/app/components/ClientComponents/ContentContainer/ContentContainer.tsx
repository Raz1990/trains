"use client";

import styles from "./ContentContainer.module.scss";
import { RadioButtons } from "@/app/components/ClientComponents/RadioButtons/RadioButtons";
import { RadioButtonProps } from "@/app/components/ClientComponents/RadioButtons/RadioButton/RadioButton";
import { radioValues } from "@/app/consts";
import { ChangeEvent } from "react";
import { RouteEndpoints, TimeTableType } from "@/app/types/types";
import { TimeTable } from "../../TimeTable/TimeTable";
import FilterDestinationInput from "../FilterDestinationInput/FilterDestinationInput";
import { filterByDestination } from "@/app/utils/utils";
import { setType } from "@/store/timeTableSlice";
import { useAppDispatch, useAppSelector } from "@/store/utils";
import { dataApi } from "@/store/dataApi";
import { setFilteredData } from "@/store/dataSlice";

type ContentContainerProps = { station: RouteEndpoints };

export default function ContentContainer({ station }: ContentContainerProps) {
  const dispatch = useAppDispatch();
  const timeType = useAppSelector((state) => state.timeTable.type);
  const data = useAppSelector((state) => state.data.data);
  const filteredData = useAppSelector((state) => state.data.filteredData);
  const availableStations = useAppSelector(
    (state) => state.data.availableStations
  );

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const radioValue = e.target.value as TimeTableType;
    dispatch(setType(radioValue));
    dispatch(dataApi.endpoints.getData.initiate({ station, type: radioValue }));
  };

  const radioOptions: RadioButtonProps[] = radioValues.map((value) => ({
    value,
    onChangeRadio,
    checked: value === timeType,
  }));

  const updateFilteredData = (destination: string) => {
    if (destination) {
      const filteredStationboard = filterByDestination(data, destination);
      const filteredData = { ...data, stationboard: filteredStationboard };
      dispatch(setFilteredData(filteredData));
    } else {
      dispatch(setFilteredData(data));
    }
  };

  return (
    <div className={styles.contentContainer}>
      <h1>Welcome to {data.stationName} Station Board!</h1>
      <h2>Viewing {timeType} table</h2>
      <RadioButtons options={radioOptions} />
      <FilterDestinationInput
        availableDestinations={availableStations}
        onChangeFilter={updateFilteredData}
      />
      <TimeTable data={filteredData} timeType={timeType} />
    </div>
  );
}
