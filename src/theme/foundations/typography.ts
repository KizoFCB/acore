import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif", "inter"].join(","),

  h1: {
    fontSize: 60,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: 500,
  },
};

export default typography;
