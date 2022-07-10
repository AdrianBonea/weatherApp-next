import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Provider } from 'react-redux';

import { Search } from 'components';
import { store } from 'store/store';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log(coords);
      },
      err => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <div className="container">
          <Search />
          <Link href="/auth">Go to auth</Link>
        </div>
      </Provider>
    </>
  );
};

export default Home;
