import { Theme, createTheme } from "@mui/material/styles";

import components from "./components";
import foundations from "./foundations";

export const defaultTheme = { ...foundations, components };

// TODO This design system should be more robust containeing all values from the design and all measures
const buildTheme = (): Theme => createTheme(defaultTheme);

const theme = buildTheme();

export default theme;
