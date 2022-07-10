import { FunctionComponent } from 'react';
import Link from 'next/link';

import fiveCityList from 'constants/fiveCityList';

import { StyledCityList, StyledCityListItem } from './styled';

const CityList: FunctionComponent = () => {
  return (
    <StyledCityList>
      {fiveCityList.map(city => (
        <StyledCityListItem value={city.id} key={city.id}>
          <Link href={`/city/${city.slug}`}>
            <a>{city.name}</a>
          </Link>
        </StyledCityListItem>
      ))}
    </StyledCityList>
  );
};

export default CityList;
