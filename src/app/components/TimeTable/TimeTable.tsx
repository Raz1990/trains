import React from "react";
import styles from "./TimeTable.module.scss";
import {
  ApiDataType,
  StationBoardType,
  TimeTableType,
} from "@/app/types/types";

type TimeTableProps = { data: ApiDataType; timeType: TimeTableType };

export function TimeTable({ data, timeType }: TimeTableProps) {
  const isDeparture = timeType === "departure";

  const tableHead = (
    <thead>
      <tr>
        <th>{timeType} Time</th>
        {isDeparture && <th>Passes Through</th>}
        <th>Destination</th>
      </tr>
    </thead>
  );

  const passStationsData = (stationsNames: string[]) => {
    const joinedStations = stationsNames.join(", ");
    return joinedStations.length !== 0 ? joinedStations : "N/A";
  };

  const trainRowData = (station: StationBoardType, idx: number) => {
    return (
      <tr key={`${idx} - ${station.departure.toString()} - ${station.to}`}>
        <td>{station.departure}</td>
        {isDeparture && <td>{passStationsData(station.stationsList)}</td>}
        <td>{station.to}</td>
      </tr>
    );
  };

  return (
    <div className={styles.timeTableContainer}>
      <table>
        {tableHead}
        <tbody>{data.stationboard.map(trainRowData)}</tbody>
      </table>
    </div>
  );
}
