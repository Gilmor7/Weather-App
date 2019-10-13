import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoritesReducer from './favorites/favorites.reducer';
import currentWeatherReducer from './currentWeather/currentWeather.reducer';
import citiesReducer from './cities/cities.reducer';

//set redux-persist configuration for the favories reducer
// for persisting the favorites cities list only
const favoritesPersistConfig = {
    key: 'favorites',
    storage,
    blacklist: ['favesWeather', 'fetchErr']
}

export default combineReducers({
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    currentWeather: currentWeatherReducer,
    cities: citiesReducer
});