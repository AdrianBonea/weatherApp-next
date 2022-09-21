import { Container } from './styled';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const LocalWeather = ({ cityName, temperatureData }) => {
  return (
    <Container>
      {cityName === '' ? (
        <h1>Loading..</h1>
      ) : cityName === undefined ? (
        <h1>
          We cannot find your location, please grant us access to your location.
        </h1>
      ) : (
        <h1>
          Now in {cityName} are {temperatureData}°C
        </h1>
      )}
    </Container>
  );
};

export default LocalWeather;
