import { FunctionComponent } from 'react';

import { SearchForm, CityList } from 'components';

import { StyledSearch } from './styled';

const Search: FunctionComponent = () => {
  return (
    <StyledSearch className="search">
      <SearchForm />
      <CityList />
    </StyledSearch>
  );
};

export default Search;
