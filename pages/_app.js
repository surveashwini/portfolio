import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ashwini Surve | Full-stack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
