import styles from "./FilterDestinationInput.module.scss";
import { ChangeEvent, useState } from "react";

type FilterDestinationInputProps = {
  availableDestinations: string[];
  onChangeFilter: (destination: string) => void;
};

export default function FilterDestinationInput({
  availableDestinations,
  onChangeFilter,
}: FilterDestinationInputProps) {
  const [filterValue, setFilterValue] = useState<string>("");

  const updateFilter = (destination: string = "") => {
    setFilterValue(destination);
    onChangeFilter(destination);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateFilter(value);
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="destinations">Filter by destination:</label>
      <input
        autoComplete="on"
        list="destinations"
        value={filterValue}
        onChange={onChangeText}
      />
      <datalist id="destinations">
        {availableDestinations.map((destination) => (
          <option key={destination}>{destination}</option>
        ))}
      </datalist>
      <button
        onClick={() => {
          updateFilter("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
