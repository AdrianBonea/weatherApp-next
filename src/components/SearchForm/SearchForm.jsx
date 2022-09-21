import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { CityList } from 'components';
import { useSearchForm } from '@hooks';
import { authActions } from 'store/authSlice';
import cities from 'constants/city.list.min.json';
import fiveCityList from 'constants/fiveCityList';

import {
  StyledError,
  StyledSearchForm,
  StyledInput,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledButton,
} from './styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useSearchForm();
  // eslint-disable-next-line no-console
  const onSubmit = data => console.log(data);

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [history] = useState(fiveCityList);

  // const cities = useAllCityList(); exced the limit of localStorage, so I need to use the slow and ugly way :(
  // console.log(cities);

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
    const mathcingCities = [];
    cities.forEach(city => {
      if (city.name.toLowerCase().includes(value.toLowerCase())) {
        const cityData = {
          ...city,
          slug: `${city.name.toLowerCase().replace(/ /g, ' - ')}-${city.id}`,
        };
        mathcingCities.push(cityData);
      }
    });
    return setResult(mathcingCities);
  };

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  const handleClickCity = city => {
    history.unshift(city); // not rly sure why it works, I feel like I am doing something illegal
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Enter city"
        value={query}
        {...(register('city'), { onChange: handleChange })}
      />
      <StyledError>{errors.city?.message}</StyledError>
      {query.length > 0 ? (
        <StyledUl>
          {result.length > 0 &&
            result

              .map(item => (
                <StyledLi key={item.id}>
                  <Link type="submit" href={`/city/${item.slug}`}>
                    <StyledLink onClick={() => handleClickCity(item)}>
                      {item.name}
                      <span>
                        ,&nbsp;
                        {item.country}
                      </span>
                    </StyledLink>
                  </Link>
                </StyledLi>
              ))
              .sort((a, b) => b.length - a.length)
              .slice(0, 5)}
        </StyledUl>
      ) : (
        <CityList history={history} />
      )}
      <StyledButton type="submit" onClick={handleClick}>
        Log Out
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
