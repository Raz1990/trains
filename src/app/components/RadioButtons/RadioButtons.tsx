import React from "react";
import styles from "./RadioButtons.module.scss";
import { RadioButton, RadioButtonProps } from "../RadioButton/RadioButton";

type RadioButtonsProps = { options: RadioButtonProps[] };

export function RadioButtons({ options }: RadioButtonsProps) {
  return (
    <div className={styles.radioGroupContainer}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          label={option.label}
          onChangeRadio={option.onChangeRadio}
          checked={option.checked}
        />
      ))}
    </div>
  );
}
