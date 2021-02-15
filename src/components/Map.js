import React,{useState, useEffect} from 'react'
import {GoogleMap, withGoogleMap, withScriptjs,Marker,InfoWindow} from 'react-google-maps'
import locationPin from './images/location.svg';

function Map({Markers,hoverSelectedActivity}) {
    const [selectedActivity,setSelectedActivity]=useState(null);
    useEffect(() => {
        setSelectedActivity(hoverSelectedActivity);
    }, [hoverSelectedActivity])
    return (
       <GoogleMap 
       defaultZoom={8}
       defaultCenter={{lat:42.795,lng:19.233}}>

        {Markers.map((activitie)=>{
            return (<Marker position={{lng:activitie.lat,lat:activitie.lon}}
            onClick={()=>{
                setSelectedActivity(activitie)
            }}
            
            icon={{
                url:locationPin,
                scaledSize: new window.google.maps.Size(50,50)
            }}
            />)
        })}
        {selectedActivity && (
            <InfoWindow
            position={{lng:selectedActivity.lat,lat:selectedActivity.lon}}
            onCloseClick={()=>{
                setSelectedActivity(null)
            }}
            >
                <div>
                    <div>{selectedActivity.location}</div>
                    <div><h3>{selectedActivity.title}</h3></div>
                </div>
            </InfoWindow>
        )}
       </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
