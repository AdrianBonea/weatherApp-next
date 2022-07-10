import { NextPage } from 'next';
import Head from 'next/head';

import { LogInForm } from '@components';

const Auth: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogInForm />
    </>
  );
};

export default Auth;
