import React,{useEffect,useState} from 'react'
import FlipCard from './FlipCard'
import WrappedMap from './Map.js'
import './FlipCards.css'
import './FlipCardsWithMap.css'
import FlipCardsSmall from './FlipCardsSmall'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import WeatherWidget from './WeatherWidget/WeatherWidget'


function FlipCards() {
    
    const [activities,setActivities]=useState([])
    const [hoverSelectedActivity,setHoverSelectedActivity]=useState(null)

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
    
      const changeHoverSelectedActivitie=(activitie)=>{
        setHoverSelectedActivity(activitie);
      }
      
      const CarouselMoved=()=>{
          console.log('pomjerio se!');
      }

    return (
        <>
        <div className='flip-cards-section flip-cards-section-with-map'>
            
            <Carousel infinite arrows onChange={CarouselMoved} addArrowClickHandler 
            arrowLeft={<i id="left-icon" class="fas fa-chevron-left left-icon"></i>}
            arrowRight={<i id="right-icon" class="fas fa-chevron-right right-icon"></i>}        
            >
                     <FlipCardsSmall activities={activities} changeHoverSelectedActivitie={changeHoverSelectedActivitie}/>
                     <FlipCardsSmall activities={activities} changeHoverSelectedActivitie={changeHoverSelectedActivitie}/>
                     <FlipCardsSmall activities={activities} changeHoverSelectedActivitie={changeHoverSelectedActivitie}/>
            </Carousel>
           
                
            <div className='map-container-with-map' style={{width:'100%',height:'80vh'}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnLRlCsIutdZMmkPI51Z3sIxG-CRW7qGw`} 
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'75%'}} />}
                mapElement={<div style={{height:'100%'}} />}
                Markers={activities}
                hoverSelectedActivity={hoverSelectedActivity}
                />
                <div className='weather-widget' style={{height:'25%'}}>
                    <WeatherWidget activitie={hoverSelectedActivity}/>
                </div>
            </div>
        </div>
        
      </>
    )
}

export default FlipCards