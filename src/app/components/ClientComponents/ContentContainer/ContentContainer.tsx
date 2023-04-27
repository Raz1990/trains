"use client";

import styles from "./ContentContainer.module.scss";
import { RadioButtons } from "@/app/components/RadioButtons/RadioButtons";
import { RadioButtonProps } from "@/app/components/RadioButton/RadioButton";
import { radioValues } from "@/app/consts";
import { ChangeEvent, useState } from "react";
import { DepartureDataType, TimeTableType } from "@/app/types/types";
import { TimeTable } from "../../TimeTable/TimeTable";
import FilterDestinationInput from "../FilterDestinationInput/FilterDestinationInput";
import { extractDestinationList, filterByDestination } from "@/app/utils/utils";
import { useRouter, usePathname } from "next/navigation";

type ContentContainerProps = { data: DepartureDataType };

export default function ContentContainer({ data }: ContentContainerProps) {
  const [radioValue, setRadioValue] = useState<TimeTableType>("departure");
  const [usableData, setUsableData] = useState<DepartureDataType>({ ...data });
  const router = useRouter();
  const currentPath = usePathname();

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value as TimeTableType);
  };

  const radioOptions: RadioButtonProps[] = radioValues.map((value) => ({
    value,
    onChangeRadio,
    checked: value === radioValue,
  }));

  const updateFilteredData = (destination: string) => {
    router.replace(currentPath);

    if (destination) {
      setUsableData(filterByDestination(data, destination));
    } else {
      setUsableData(data);
    }
    router.replace(currentPath);
  };

  return (
    <div className={styles.contentContainer}>
      <h1>Welcome to {data.stationName} Station Board!</h1>
      <h2>Viewing {radioValue} table</h2>
      <RadioButtons options={radioOptions} />
      <FilterDestinationInput
        availableDestinations={extractDestinationList(data.stationboard)}
        onChangeText={updateFilteredData}
      />
      <TimeTable data={usableData} />
    </div>
  );
}
