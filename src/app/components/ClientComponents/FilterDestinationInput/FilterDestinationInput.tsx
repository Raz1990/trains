"use client";

import styles from "./FilterDestinationInput.module.scss";
import { ChangeEvent, useRef, useState } from "react";

type FilterDestinationInputProps = {
  availableDestinations: string[];
  onChangeText: any;
};

export default function FilterDestinationInput({
  availableDestinations,
  onChangeText,
}: FilterDestinationInputProps) {
  const [filterValue, setFilterValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const updateFilter = (destination: string = "") => {
    onChangeText(destination);
  };

  const _onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterValue(value);
    const normalizedDestinations = availableDestinations
      .map((destination) => destination.toLocaleLowerCase())
      .includes(value.toLowerCase());
    if (value === "" || normalizedDestinations) {
      updateFilter(value);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="destinations">Filter by destination:</label>
      <input
        autoComplete="on"
        list="destinations"
        value={filterValue}
        onChange={_onChangeText}
        ref={inputRef}
      />
      <datalist id="destinations">
        {availableDestinations.map((destination) => (
          <option key={destination}>{destination}</option>
        ))}
      </datalist>
      <button
        onClick={() => {
          setFilterValue("");
          updateFilter();
        }}
      >
        Clear
      </button>
    </div>
  );
}
