import axios from 'axios';

import { baseUrls, apiKeys } from 'constants/api';

export const fetchLocalWeather = async (lat, lon) => {
  if (!lat || !lon) {
    return undefined;
  }
  const url = `${baseUrls.live}?lat=${lat}&lon=${lon}&${baseUrls.unit}&appid=${apiKeys.openWeatherMap}`;
  const { data } = await axios.get(url);
  return data;
};
