import "server-only";
import { departureMapper } from "@/app/utils/utils";
import { RouteEndpoints, TimeTableType } from "@/app/types/types";

export async function getData(station: RouteEndpoints, type: TimeTableType) {
  const fetchUrl = `http://localhost:3000/api/${station}?type=${type}`;
  const res = await fetch(fetchUrl);

  const data = await res.json();
  return departureMapper(data);
}
