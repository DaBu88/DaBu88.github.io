import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded ? <Layout><Component {...pageProps} /></Layout> : null;
}

export default MyApp;
