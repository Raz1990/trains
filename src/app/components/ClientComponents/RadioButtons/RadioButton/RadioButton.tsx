import React, { ChangeEventHandler } from "react";
import styles from "./RadioButton.module.scss";
import { TimeTableType } from "@/app/types/types";

export type RadioButtonProps = {
  value: TimeTableType;
  label?: string;
  onChangeRadio: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

export function RadioButton({
  value,
  label,
  onChangeRadio,
  checked,
}: RadioButtonProps) {
  return (
    <div className={styles.radioButtonContainer}>
      <input
        type="radio"
        id={value}
        name="time_table_type"
        value={value}
        onChange={onChangeRadio}
        checked={checked}
      />
      <label htmlFor={value}>{value ?? label}</label>
    </div>
  );
}
