import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <ThemeProvider theme={theme}>
		   <CssBaseline/>
          <Toaster/>
          <Component {...pageProps} />
       </ThemeProvider>
    </Provider>
  );
}
