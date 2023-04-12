import { createTheme } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export const useProfile = () => {
  const theme = createTheme();
  const tabs = ['Personal Information', 'Experience', "Education & Training"]
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return {
    tabs,
    value, setValue,
    handleChange,
    theme
  } as const;
};
