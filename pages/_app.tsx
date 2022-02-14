import "tailwindcss/tailwind.css";
import { AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
