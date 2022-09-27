import { useState, useEffect } from 'react';

import { SearchForm, LocalWeather } from 'components';
import { usePosition } from 'hooks';
import { fetchLocalWeather } from 'services/api';

import { Container } from './styled';

const Search = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

  const { latitude, longitude } = usePosition();

  useEffect(() => {
    fetchLocalWeather(latitude, longitude).then(data => {
      if (!data) {
        return;
      }
      setWeather(data.main);
      setCity(data.name);
    });
  }, [latitude, longitude]);

  return (
    <Container>
      <LocalWeather cityName={city} temperatureData={weather.temp} />
      <SearchForm />
    </Container>
  );
};

export default Search;
