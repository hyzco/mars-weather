
const API:any = `https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_KEY}&feedtype=json&ver=1.0`;

export async function getMarsWeather ():Promise<any> {
        return fetch(API,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then(data => data.json())
            .then(response => {return response})
}


export function displayDate(date:Date): string{
        return date.toLocaleDateString(
            undefined, // locale paramater if undefined it is default / de-De ar-Eg en-EN
            {day : 'numeric', month: 'long'}
        )
}


