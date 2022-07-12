import type { NextPage } from 'next';
import Head from 'next/head';

import { LogInForm, Search } from 'components';
import { useAuth } from 'hooks';

const Home: NextPage = () => {
  // @ts-ignore
  const isLoggedIn = useAuth();
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">{isLoggedIn ? <Search /> : <LogInForm />}</div>
      {/* // i know it is not the best way but redux is not working how i expected
      with different pages */}
    </>
  );
};

export default Home;
