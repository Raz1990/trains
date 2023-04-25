import "server-only";
import { departureMapper } from "@/app/utils/utils";
import { TimeTableType } from "@/app/types/types";

export async function getData(type: TimeTableType) {
  const fetchUrl = `http://localhost:3000/api/basel?type=${type}`;
  const res = await fetch(fetchUrl);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return departureMapper(data);
}
