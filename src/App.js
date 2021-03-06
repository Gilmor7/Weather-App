import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// redux actions
import { fetchWeatherAndForecast } from './redux/currentWeather/currentWeather.actions';

// Pages imports
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';

// Components imports
import PageWrapper from './components/PageWrapper';

// default city to fetch weather on first loading 
const DEFAULT_CITY = {
  id: '215854',
  cityName: "Tel Aviv"
}

function App({ fetchDefaultCityData }) {

  useEffect(() => {
    // fetching the default city data to display
    // on weather page after application first loaded
    fetchDefaultCityData(DEFAULT_CITY);
  }, [])


  return (
    <Router>
      <PageWrapper>
        <Route exact path='/' component={WeatherPage} />
        <Route path='/favorites' component={FavoritesPage} />
      </PageWrapper>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchDefaultCityData: defaultCity => dispatch(fetchWeatherAndForecast(defaultCity))
})

export default connect(null, mapDispatchToProps)(App);



