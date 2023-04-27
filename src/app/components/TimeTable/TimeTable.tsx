import React from "react";
import styles from "./TimeTable.module.scss";
import { DepartureDataType, StationBoardType } from "@/app/types/types";

type TimeTableProps = { data: DepartureDataType };

export function TimeTable({ data }: TimeTableProps) {
  const tableHead = (
    <thead>
      <tr>
        <th>Departure Time</th>
        <th>Passes Through</th>
        <th>Destination</th>
      </tr>
    </thead>
  );

  const passStationsData = (stationsNames: string[]) => {
    const joinedStations = stationsNames.join(", ");
    return joinedStations.length !== 0 ? joinedStations : "N/A";
  };

  const trainRowData = (station: StationBoardType) => {
    return (
      <tr key={`${station.departure.toString()} - ${station.to}`}>
        <td>{station.departure}</td>
        <td>{passStationsData(station.stationsList)}</td>
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
