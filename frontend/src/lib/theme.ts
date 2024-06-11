import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      turquoiseLight: string;
      turquoiseDark1: string;
      turquoiseDark2: string;
      orangePastel: string;
      yellow: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      turquoiseLight?: string;
      turquoiseDark1?: string;
      turquoiseDark2?: string;
      orangePastel?: string;
      yellow?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Mulish';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Mulish'), local('Mulish-Regular'), url(https://fonts.gstatic.com/s/mulish/v4/1Ptvg83HX_SGhgqk3wot.woff2) format('woff2');
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#5ACCCC',
    },
    secondary: {
      main: '#4AAA88',
    },
    error: {
      main: '#F76434',
    },
    warning: {
      main: '#FAAD00',
    },
    info: {
      main: '#335C6E',
    },
    success: {
      main: '#53C2C2',
    },
    background: {
      default: '#FFFFFF',
    },
    custom: {
      turquoiseLight: '#CFFAFA',
      turquoiseDark1: '#53C2C2',
      turquoiseDark2: '#28B8B8',
      orangePastel: '#FFE6DC',
      yellow: '#FABD33',
    },
  },
});

export default theme;