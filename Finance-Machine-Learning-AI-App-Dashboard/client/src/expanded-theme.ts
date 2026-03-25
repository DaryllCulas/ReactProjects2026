
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteColor, Palette } from "@mui/material/styles";


declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }

}

export {};