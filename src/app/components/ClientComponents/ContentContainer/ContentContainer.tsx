"use client";

import styles from "./ContentContainer.module.scss";
import { RadioButtons } from "@/app/components/RadioButtons/RadioButtons";
import { RadioButtonProps } from "@/app/components/RadioButton/RadioButton";
import { radioValues } from "@/app/consts";

export default function ContentContainer({ data }) {
  const radioOptions: RadioButtonProps[] = radioValues.map((value) => ({
    value,
  }));

  return (
    <div className={styles.contentContainer}>
      <RadioButtons options={radioOptions} />
    </div>
  );
}
