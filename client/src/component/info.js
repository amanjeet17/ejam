import React from 'react'

const Weatherinfo = (props) => {
    const { coord, weather, main, wind, name } = props.details
    return (
        <div>
            <h2 className='heading'>
            Weather Info  {name == null ? null: ` of ${name}`}</h2>
            <div className="list-option">
                <div>
                    <p> Longitude: {coord['lon']}  </p>
                    <p>Latitude : {coord.lat}</p>
                    <p>Clouds:{weather[0].description}</p>
                    <p>Wind Speed :{wind.speed} </p>
                    <p>Wind Degree:{wind.deg}</p>
                    <p>Temparature : {main.temp}</p>
                    <p>Max temp:{main.temp_max}  </p>
                    <p>Min tem:{main.temp_min}</p>
                    <p>Pressure:{main.pressure} </p>
                    <p>Humidity:{main.humidity}</p>
                </div>

            </div>
        </div>
    )
}
export default Weatherinfo