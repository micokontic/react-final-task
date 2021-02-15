import React from 'react'
import {GoogleMap, withGoogleMap, withScriptjs,Marker} from 'react-google-maps'

function Map({Markers}) {
    return (
       <GoogleMap 
       defaultZoom={8}
       defaultCenter={{lat:42.795,lng:19.233}}>
        {Markers.map((coordinate)=>{
            console.log(coordinate)
            return (<Marker position={coordinate}/>)
        })}
       </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
