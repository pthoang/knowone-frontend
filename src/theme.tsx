import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
      white: Palette['primary'];
    }
  
    interface PaletteOptions {
      white: PaletteOptions['primary'];
    }
  }

  declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      white: true;
    }
  }

  declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
      white: true;
    }
  }


export const mainTheme = createTheme({
    palette: {
      primary: {
        main: '#237978'
      },
      white: {
        main: '#fff',
      },
    },
  });