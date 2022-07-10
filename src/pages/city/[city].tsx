/* eslint-disable no-use-before-define */
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';

import { baseUrls } from '@constants/api';
import cities from 'constants/city.list.min.json';
import { TodayWeather } from '@components';

import { Container } from './styled';

export async function getServerSideProps(context: {
  params: { city: string };
}) {
  const city = getCityId(context.params.city);
  // fetch data for current weather
  const resultLiveWeather = await fetch(
    `${baseUrls.live}?lat=${city.coord.lat}&lon=${city.coord.lon}&${baseUrls.unit}&appid=${process.env.APY_KEY}`
  );
  const liveData = await resultLiveWeather.json();
  return {
    props: {
      liveData,
    },
  };
}

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

// @ts-ignore
const City: NextPage = ({ liveData }: Array) => {
  return (
    <>
      <Head>
        <title>{liveData.name}</title>
        <meta name="description" content="Weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Link href="/">Back</Link>
        <TodayWeather
          {...liveData}
          cityName={liveData.name}
          temp={liveData.main}
          weather={liveData.weather[0]}
        />
      </Container>
    </>
  );
};

export default City;
