import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';

import { useSearchForm, useAllCityList } from '@hooks';
import cities from 'constants/city.list.min.json';

import {
  StyledError,
  StyledSearchForm,
  StyledInput,
  StyledUl,
  StyledLi,
  StyledLink,
} from './styled';

const SearchForm: FunctionComponent = () => {
  console.log(useAllCityList);
  const { handleSubmit, register, errors } = useSearchForm();
  const onSubmit = (data: object) => console.log(data);

  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);

    const mathcingCities: object[] = [];

    // @ts-ignore
    cities.forEach(city => {
      if (city.name.toLowerCase().includes(value.toLowerCase())) {
        const cityData = {
          ...city,
          slug: `${city.name.toLowerCase().replace(/ /g, ' - ')}-${city.id}`,
        };
        mathcingCities.push(cityData);
      }
    });
    // @ts-ignore
    return setResult(mathcingCities);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Enter city"
        value={query}
        {...(register('city'), { onChange: handleChange })}
      />
      <StyledError>{errors.city?.message}</StyledError>
      {query.length > 3 && (
        <StyledUl>
          {result.length > 0 &&
            result
              // @ts-ignore
              .map(item => (
                <StyledLi
                  key={
                    // @ts-ignore
                    item.id
                  }
                >
                  <Link
                    type="submit"
                    href={`/city/${
                      // @ts-ignore
                      item.slug
                    }`}
                  >
                    <StyledLink>
                      {
                        // @ts-ignore
                        item.name
                      }
                      <span>
                        ,&nbsp;
                        {
                          // @ts-ignore
                          item.country
                        }
                      </span>
                    </StyledLink>
                  </Link>
                </StyledLi>
              ))
              // @ts-ignore
              .sort((a, b) => b.length - a.length)
              .slice(0, 5)}
        </StyledUl>
      )}
    </StyledSearchForm>
  );
};

export default SearchForm;
