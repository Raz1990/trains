import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const fetchUrl = `https://transport.opendata.ch/v1/stationboard?station=basel&type=${type}&transportations=train`;
  const res = await fetch(fetchUrl);
  const data = await res.json();
  return NextResponse.json(data);
}
