/* eslint-disable no-use-before-define */
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';

import { baseUrls } from '@constants/api';
import { TodayWeather } from '@components';
import { useAuth } from '@hooks';
import cities from 'constants/city.list.min.json';

import { Container } from 'styles/styledCity';

// @ts-ignore
const City: NextPage = ({ liveData }: object) => {
  // @ts-ignore
  const isLoggedIn = useAuth();

  return (
    <>
      <Head>
        <title>{liveData.name}</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoggedIn ? (
        <Container>
          <Link href="/">Back</Link>
          <TodayWeather
            {...liveData}
            cityName={liveData.name}
            temp={liveData.main}
            weather={liveData.weather[0]}
          />
        </Container>
      ) : (
        <Link href="/">You need to auth first!</Link>
      )}
    </>
  );
};

export default City;

// get city by id
const getCityId = (param: string) => {
  const cityParam = param.trim();
  const splitCity = cityParam.split('-');
  const id = splitCity[splitCity.length - 1];
  if (!id) {
    return null;
  }
  // @ts-ignore
  const city = cities.find((item: { id: number }) => item.id === Number(id));
  if (city) {
    return city;
  }
  return null;
};

export async function getServerSideProps(context: {
  params: { city: string };
}) {
  const city = getCityId(context.params.city);
  // throw a 404 if city not found
  if (!city) {
    return {
      notFound: true,
    };
  }
  // fetch data for current weather
  const resultLiveWeather = await fetch(
    `${baseUrls.live}?lat=${city.coord.lat}&lon=${city.coord.lon}&${baseUrls.unit}&appid=${process.env.API_KEY}`
  );
  const liveData = await resultLiveWeather.json();
  return {
    props: {
      liveData,
    },
  };
}
