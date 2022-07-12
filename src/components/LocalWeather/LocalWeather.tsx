import { Container } from './styled';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const LocalWeather = ({ cityName, temperatureData }) => {
  return (
    <Container>
      <h1>
        Now in {cityName} are {temperatureData}°C
      </h1>
    </Container>
  );
};

export default LocalWeather;
