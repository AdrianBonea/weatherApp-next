import { useState, useEffect } from 'react';
import { baseUrls, apiKeys } from 'constants/api';

import { SearchForm, LocalWeather } from 'components';
import { Container } from './styled';

const Search = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        const url = `${baseUrls.live}?lat=${latitude}&lon=${longitude}&${baseUrls.unit}&appid=${apiKeys.openWeatherMap}`; // why process.env.API_KEY is not working?
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setWeather(data.main);
            setCity(data.name);
          });
      },
      err => {
        console.log(err);
      }
    );
  }, []);
  return (
    <Container>
      <SearchForm />
      <LocalWeather cityName={city} temperatureData={weather.temp} />
    </Container>
  );
};

export default Search;
