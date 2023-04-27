export type TimeTableType = "departure" | "arrival";

export type RouteEndpoints = "basel" | "geneva";

export type StationBoardType = {
  departure: string; // a time string
  stationsList: string[]; // an array of all the stations the train pass through to its destination
  to: string; // final destination
};

export type DepartureDataType = {
  stationName: string;
  stationboard: StationBoardType[];
};

export type ArrivalDataType = {
  stationName: string;
  stationboard: StationBoardType[];
};
