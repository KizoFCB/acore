import { Theme, createTheme } from "@mui/material/styles";

import components from "./components";
import foundations from "./foundations";

export const defaultTheme = { ...foundations, components };

const buildTheme = (): Theme => createTheme(defaultTheme);

const theme = buildTheme();

export default theme;
