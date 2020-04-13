import React,{useState} from 'react';
import Weatherinfo from './info';
import Listbox from './listbox';
import { connect } from 'react-redux';
import {getWeather} from '../actions/weatherAction';

const Container =(props)=> {
  const [selectedCity, setCity]=useState({name:''});
  const getWeatherDetails =() =>{
      if(selectedCity){
        props.getWeather(selectedCity)
    }
  }

  const updatecitySelection = (i) =>{
    const city = props.cities[i]
    setCity(city)
  }
  
  const { cities ,weatherDetails} = props

  return (
    <React.Fragment>
    <h1 className="selection"> Weather Info App </h1>
    <h2 className="selection">Selected city :  {selectedCity.name!=='' ? selectedCity.name :'None'}</h2>
    <div className="container">
        <div className='slds-col'>
          <Listbox
            id='1'
            heading='Cities'
            options={cities}
            updatecitySelection={updatecitySelection}
            />
        </div>
      <div className="button">
      <button className='weather-button' disabled={!selectedCity.name} onClick={getWeatherDetails}>
        Weather Info
        </button>
        </div>
        <div className='slds-col'>
          <Weatherinfo details={weatherDetails}/>
        </div>
    </div>
    </React.Fragment>
  );
}

const mapStateToProps =(state)=>({
    cities:state.weather.cities,
    weatherDetails:state.weather.weatherDetails
})

export default connect(mapStateToProps,{getWeather})(Container);
