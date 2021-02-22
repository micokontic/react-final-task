import React from 'react'
import './DetailProductPage.css'
import BonFireRating from '../BonFireRating/BonFireRating';
import IncludedAccordition from '../IncludedAccordition/IncludedAccordition';
import locationPin from '../images/location.svg';
import WrappedMap from '../Map.js'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import Carousel from '@brainhubeu/react-carousel';

function DetailProductPage({activitie}) {
    
    return (
        
        <div className='detail-product-container'>
            <div className="detail-product-image">
                <Carousel>
                    <img style={{width:'100%'}} src={activitie.images[0]}></img>
                    <img style={{width:'100%'}} src={activitie.images[1]}></img>
                    <img style={{width:'100%'}} src={activitie.images[2]}></img>

                </Carousel>
            <div className='map-container-with-map' style={{width:'90%',height:'60vh'}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnLRlCsIutdZMmkPI51Z3sIxG-CRW7qGw`} 
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
                Markers={[activitie]}
                hoverSelectedActivity={activitie}
                />
                <div className='weather-widget' style={{height:'25%'}}>
                    <WeatherWidget activitie={activitie}/>
                </div>
            </div>
            </div>
            <div className="detail-product-data">
                <div className='detail-product-heading botton-border'>
                    <h2>{activitie.title}</h2>
                </div>
                <div className='detail-product-location botton-border'>
                    <div><div className='location-continer' id="location-container"><img src={locationPin}></img>
                    <div className='location-text'>{activitie.location}</div></div></div>
                </div>
                <div className="detail-product-data-rating botton-border">
                        <div className="rating"><BonFireRating/></div>
                        <div className='review'>
                            <a>1 Bonfire Review(s)</a> <span class="separator">|</span> <a>Add Your Bonfire Review</a>
                        </div>
                </div>
                <div className="detail-product-price botton-border">
                        <h2>${activitie.pricePerPerson}</h2>
                        <a className='review'>Available in this period</a>
                </div>
                <div className="detail-product-overview botton-border">
                        <h4>Quick Overview</h4>
                        <p>It is the deepest canyon in Europe, and second deepest in the world after the Grand Canyon of Colorado, USA. 78km long, and up to 1.300m deep, this "tear of Europe", as it is also called, is a great natural and tourist attraction not only in the area, but in the entire country.</p>
                </div>
                <div>
                    <IncludedAccordition activitie={activitie}/>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage
