import Head from 'next/head';
import 'normalize.css';
import 'milligram/dist/milligram.css';
import '../style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}