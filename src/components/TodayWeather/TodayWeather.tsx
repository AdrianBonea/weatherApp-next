import { FunctionComponent } from 'react';

import { Container } from './styled';

// @ts-ignore
const TodayWeather: FunctionComponent = ({ cityName, temp, weather }) => {
  return (
    <Container>
      <h1>Live weather in {cityName}</h1>
      <h2>Temperature now: {temp.temp} ℃</h2>
      <h2>Feels like: {temp.feels_like} ℃</h2>
      <h2>Humidity: {temp.humidity} %</h2>
      <h2>Today {weather.description}.</h2>
    </Container>
  );
};

export default TodayWeather;
