import {GET_WEATHERINFO} from './types';
import axios from 'axios';


export const getWeather = (place) => async dispatch => {
    const { name } = place;
    const res = await axios.get(`/api/weather/info?city=${name}`)
    const data = JSON.parse(res.data)
    dispatch({
        type:GET_WEATHERINFO,
        payload:data
    })
}