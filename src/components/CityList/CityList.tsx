import { FunctionComponent } from 'react';
import Link from 'next/link';

import { StyledCityList, StyledCityListItem } from './styled';

// @ts-ignore
const CityList: FunctionComponent = ({ history }) => {
  return (
    <StyledCityList>
      {history
        // @ts-ignore
        .map(city => (
          <StyledCityListItem value={city.id} key={city.id}>
            <Link href={`/city/${city.slug}`}>{city.name}</Link>
          </StyledCityListItem>
        ))
        .slice(0, 5)}
    </StyledCityList>
  );
};

export default CityList;
