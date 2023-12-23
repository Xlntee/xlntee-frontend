import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface Option {
  value: string;
  text: string;
}

interface IProps {
  name: string;
  options: Option[];
  currentOption: string;
  setCurrentOption: (event: SelectChangeEvent) => void;
}

const FilterInputMenu: React.FC<IProps> = ({
  name,
  options,
  currentOption,
  setCurrentOption,
}) => {
  return (
    <FormControl variant="outlined">
      <Select
        sx={{
          width: "200px",
          height: "60px",
          backgroundColor: "#fff",
          borderRadius: "5px",
        }}
        value={currentOption}
        onChange={setCurrentOption}
        displayEmpty
        renderValue={
          currentOption !== "" ? undefined : () => <span>{name}</span>
        }
        disabled={!options[0]}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterInputMenu;
