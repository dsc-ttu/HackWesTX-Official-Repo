import { CssBaseline } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import '../styles/globals.css';
import {Poppins} from 'next/font/google'
import { MantineProvider } from "@mantine/core";
import { Man } from "@mui/icons-material";
import 'tailwindcss/tailwind.css'; 
import '@mantine/core/styles.css'

/**
 * @remarks Setting type for pages with a layout
 * @remarks Type for properties of a page with a layout
 * Setup for layout use in this app
 * @remarks Setting type for pages with a layout
 * @type
 */


/**
 * Project Theme
 * @remark Theme generator courtesy of bareynol
 * @link https://bareynol.github.io/mui-theme-creator/#Typography
 * @remark Premade components courtesy of MUI
 * @link https://mui.com/
 */


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600']})
const customeTheme = {
  palette: {
    primary: {
      main: "#055215",
    },
    primarylight: {
      main: "#09BC8A",
    },
    secondarylight: {
      main: "#055215",
    },
    secondary: {
      main: "#F0DCCA",
    },
    darker: {
      main: "#004346",
    },
    lightaccent: {
      main: "#4BC7BF",
    },
    darkaccent: {
      main: "#172A3A",
    },
  },
  typography: {
    fontFamily: "Sofia Sans",
    h1: {
      fontFamily: "Bungee",
    },
    h2: {
      fontFamily: "Bungee",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};
let theme = createTheme(customeTheme);
// theme = responsiveFontSizes(theme);

/**
 * @function MyApp
 * @fileoverview Entry point of the application
 */
type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main className={poppins.className}>
          <MantineProvider>
        {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;


