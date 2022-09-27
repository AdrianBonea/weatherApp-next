import { useEffect } from 'react';

import cities from 'constants/city.list.min.json';
import { usePersistStorage } from '.';

const ALL_CITY_KEY = 'allCityList';

let once = false;

const useAllCityList = () => {
  const [allCityList, setAllCityList] = usePersistStorage([], ALL_CITY_KEY);

  useEffect(() => {
    if (!once && allCityList.length === 0) {
      setAllCityList(cities);
    }
    if (!once) once = true;
  }, [allCityList.length, setAllCityList]);

  return allCityList;
};

export default useAllCityList;
