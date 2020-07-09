import React, {useEffect,useState} from 'react';
import Weather from './view/weather';
import './css/App.css';
import * as Mars from './library/functions/weather';



interface ISolData {
      sol:string| number;
      maxTemp:number;
      minTemp:number;
      //windSpeed:number;
      date: string;
}

export interface ISolData1 extends Array<ISolData> {}



const sol_keys: Array<any> = [];
//let last_sol_day : number = 0;
let solData:ISolData;
let solDataArr: Array<any> = []; // try with interface later
//const refreshDataMS : number = 60 * 1000; // 1 minute;

function App() {
  const [marsWeather,setMarsWeather] = useState<ISolData1|null>(null)
  const [error, setError] = useState<any|null>(null);
  
  const getAndSetWeather = (): void =>{
        Mars.getMarsWeather().then(data =>{
          sol_keys.push(data.sol_keys);
         // last_sol_day =  Number(sol_keys[0][sol_keys[0].length - 1]);
          sol_keys[0].forEach((key: string | number) =>{
              solDataArr.push({
                  sol: key,
                  maxTemp: data[key].AT.mx,
                  minTemp: data[key].AT.mn,
                  //windSpeed: data[key].HWS.av,
                  //windDirectionDegrees: data.WD.most_common.compass_degrees,
                  //windDirectionCardinal: data.WD.most_common.compass_point,
                  date: Mars.displayDate(new Date(data[key].First_UTC)),
              });
          })         
            setMarsWeather(solDataArr);  
        }).catch(err =>{
            setError(err);
        })
      }

      useEffect(()=>{
        getAndSetWeather();
         /* const interval:NodeJS.Timeout = setInterval(()=>{
            getAndSetWeather();
          },refreshDataMS)
          return () => clearInterval(interval);*/
      },[])

  return (
    <div className="App">
        {marsWeather?.map(data =>(
              <Weather key={data.sol} weather={data} error={error}/> 
        ))}


    </div>
  );
}

export default App;
