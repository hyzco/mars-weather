import React from 'react';
import '../css/weather.scss';



let arrEmoji : Array<any> = ["❤️","👽","🔭","🪐","🌌","🛰️","🔋","🔥"];

const randomEmogy = ():any =>{ 
      return arrEmoji[Math.floor(Math.random() * arrEmoji.length)];
}

function weather(props:any) {
    console.log(props);
  return (
    <article className="widget">
        <div className="weatherInfo">
            <div className="temperatureInfo">
                  <div className="temperature"><span>Min : {Math.round(props.weather.minTemp)}&deg;</span></div>
                 <div className="temperature"><span>Max : {Math.round(props.weather.maxTemp)}&deg;</span></div>
            </div>
       
              <div className="description">    
                    <div className="weatherCondition">MARS</div>    
                    <div className="place">Lovely Planet <span role="img" aria-label="mars-emoji">{randomEmogy()}</span></div>
              </div>
          </div>
  <div className="date">{props.weather.date} / {props.weather.sol} SOL</div>
  </article>  
  );
}

export default weather;

/*TEMPLATE FROM https://codepen.io/takeradi/pen/ONJzEv */
