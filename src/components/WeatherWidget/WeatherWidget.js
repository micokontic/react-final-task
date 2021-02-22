import React from 'react'

function WeatherWidget({activitie}) {
    
   
    const format_coordinates=(activitie)=>{
        // Given a set of coordinates in the form {'lat': LAT, 'lng': LNG}
        // format them to weatherwidget.io expected url coordinate format.
        // The format is:
        // - coordinates rounded to 2nd decimal
        // - dots replaced by d
        // - minus signs replaced by n
        // - LAT and LNG concatenated
            
            if(activitie==null){
                var coordinates={lat:42.43 ,lng:19.26}
            }else{
                var coordinates={lat:42.43 ,lng:19.26} //ovo prebaciti posle 
            }

        
            coordinates['lat'] = Math.round(coordinates['lat'] * 100) / 100
            coordinates['lng'] = Math.round(coordinates['lng'] * 100) / 100
            var lat = coordinates['lat'].toString();
            if (lat.split()[lat.length-1]=='.'){
                lat += "0"
            }
            lat = lat.replace(".", "d").replace("-", "n")
            lng = coordinates['lng'].toString();
            if (lng.split()[lng.length-1]=='.'){
                lng += "0"
            }
            var lng = lng.replace(".", "d").replace("-", "n")
            return lat + lng
        }
        console.log(format_coordinates(activitie));

    return (
            <div>
                <a className="weatherwidget-io" style={{display:'block'}} href={`https:forecast7.com/en/${format_coordinates(activitie)}/podgorica/`} data-label_1="PODGORICA" data-label_2="WEATHER" data-theme="original" >SALTA CAPITAL</a>

                {!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    // if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = 'https:weatherwidget.io/js/widget.min.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    // }
                }
                    (document, 'script', 'weatherwidget-io-js')
                }

        </div>
    )
}

export default WeatherWidget
