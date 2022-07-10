import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
  loading: false,
  error: null,
};

export const liveWeatherSlice = createSlice({
  name: 'liveWeather',
  initialState,
  reducers: {
    setLiveWeather: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const { setLiveWeather } = liveWeatherSlice.actions;
export default liveWeatherSlice.reducer;
