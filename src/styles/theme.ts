import { DefaultTheme } from 'styled-components';

const theme = (): DefaultTheme => ({
  colors: {
    primary: {
      blue: '#03142E',
      red: '#CE181E',
      lightBlue: '#7C95BF',
      darkBlue: '#020C1C',
    },
    secondary: {
      lightBlue: '#048ABF',
    },
    typography: {
      primary: '#152536',
      error: '#EB0055',
      success: '#008836',
      alert: '#6800F1',
    },
  },
});

export default theme;
