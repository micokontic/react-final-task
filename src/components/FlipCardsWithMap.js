import React,{useEffect,useState} from 'react'
import FlipCard from './FlipCard'
import WrappedMap from './Map.js'
import './FlipCards.css'
import './FlipCardsWithMap.css'
function FlipCards() {
    
    const [activities,setActivities]=useState([])

    useEffect(() => {
        getBlob();
    }, [])

    const getBlob=()=>{ 
        /*ovdje bi stavio url tog koji ti treba*/
        fetch("https://jsonblob.com/api/jsonBlob/d98ac18e-6a1c-11eb-b59d-a157b950443c") 
              .then(response=>{
             return response.json();
              })
        .then(response=>{
            setActivities(response);

        })
              .catch(function(error){
                  console.log(error);
              });
      }
    

    return (
        <>
        <div className='flip-cards-section flip-cards-section-with-map'>

            <div className='flip-cards-container-with-map'>
                {activities.map((activitie)=>{
                    return(<FlipCard activitie={activitie} height={'290px'} size={'small'}/>)
                })}
            </div>

            <div className='map-container-with-map' style={{width:'100%',height:'85vh'}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnLRlCsIutdZMmkPI51Z3sIxG-CRW7qGw`} 
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
                Markers={activities}
                />
            </div>
        </div>
        
      </>
    )
}

export default FlipCards