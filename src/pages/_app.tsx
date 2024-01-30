import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
