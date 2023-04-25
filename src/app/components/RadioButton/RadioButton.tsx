import React from "react";
import styles from "./RadioButton.module.scss";
import { TimeTableType } from "@/app/types/types";

export type RadioButtonProps = { value: TimeTableType; label?: string };

export function RadioButton({ value, label }: RadioButtonProps) {
  return (
    <div className={styles.radioButtonContainer}>
      <input type="radio" id={value} name="time_table_type" value={value} />
      <label htmlFor={value}>{value ?? label}</label>
    </div>
  );
}
