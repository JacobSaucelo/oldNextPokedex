import { chakraTheme, extendTheme } from "@chakra-ui/react";
import { Breakpoints } from "../config/breakpoints";
import { Colors } from "../config/Colors";

const overrides = {
  ...chakraTheme,
  colors: Colors,
  breakpoints: Breakpoints,
};

const theme = extendTheme(overrides);

export default theme;
