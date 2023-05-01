import { ApiDataType, StationBoardType } from "../types/types";

export function departureMapper(data: any) {
  const relevantData: ApiDataType = {
    stationName: data.station.name,
    stationboard: data.stationboard.map((train: any) => {
      const filteredData: StationBoardType = {
        departure: new Date(train.stop.departure).toLocaleTimeString(),
        stationsList: train.passList
          .map((passStation: any) => {
            return passStation.station.name;
          })
          .filter(
            (passStation: any, idx: number) =>
              !!passStation && idx !== train.passList.length - 1
          ),
        to: train.to,
      };
      return filteredData;
    }),
  };

  return relevantData;
}

export const filterByDestination = (data: ApiDataType, destination: string) => {
  const filteredStationboard = data.stationboard.filter((stationBoard) =>
    stationBoard.to
      .toLocaleLowerCase()
      .includes(destination.toLocaleLowerCase())
  );
  return filteredStationboard;
};

export const extractDestinationList = (stationboard: StationBoardType[]) => {
  const stationNames = stationboard.map((station) => station.to);
  const uniqueNames = stationNames.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const orderedUniqueNames = uniqueNames.sort();
  return orderedUniqueNames;
};
