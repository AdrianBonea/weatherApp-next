import type { NextPage } from 'next';
import Head from 'next/head';

import { Search } from 'components';
// import { useAuth } from 'hooks';

const Home: NextPage = () => {
  // @ts-ignore
  // const isLoggedIn = useAuth(); // usefull for auth
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Search />
      </div>
      {/* <div className="container">{isLoggedIn ? <Search /> : <LogInForm />}</div> */}
      {/* I will come back to auth later, for now I will work without(don't forget to import loginform) */}
    </>
  );
};

export default Home;
