const cityList: Array<{
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
  slug: string;
}> = [
  {
    id: 683506,
    name: 'Bucharest',
    state: '',
    country: 'RO',
    coord: {
      lon: 26.10626,
      lat: 44.432251,
    },
    slug: 'bucharest-683506',
  },
  {
    id: 2968815,
    name: 'Paris',
    state: '',
    country: 'FR',
    coord: {
      lon: 2.3486,
      lat: 48.853401,
    },
    slug: 'paris-2968815',
  },
  {
    id: 5128581,
    name: 'New York City',
    state: 'NY',
    country: 'US',
    coord: {
      lon: -74.005966,
      lat: 40.714272,
    },
    slug: 'new-york-city-5128581',
  },
  {
    id: 1816670,
    name: 'Beijing',
    state: '',
    country: 'CN',
    coord: {
      lon: 116.397232,
      lat: 39.907501,
    },
    slug: 'beijing-1816670',
  },
  {
    id: 2761367,
    name: 'Wien',
    state: '',
    country: 'AT',
    coord: {
      lon: 16.371691,
      lat: 48.208199,
    },
    slug: 'wien-2761367',
  },
];

export default cityList;
