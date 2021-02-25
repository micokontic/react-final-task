import React from 'react'
import './DetailProductPage.css'
import BonFireRating from '../BonFireRating/BonFireRating';
import IncludedAccordition from '../IncludedAccordition/IncludedAccordition';
import locationPin from '../images/location.svg';
import WrappedMap from '../Map.js'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TimerLogo from './images/timer.svg'
import GroupLogo from './images/group.svg'
import KidLogo from './images/caring-father.svg'
import NumberLogo from './images/number.svg'
import FitnessLogo from './images/bicep.svg'
import UserCard from '../UserCard/UserCard'
import GuideLogo from '../images/guide.svg'

function DetailProductPage({activitie}) {
    
    return (
        
        <div className='detail-product-container'>
            <div className="detail-product-image">
            <div className="carausel">
            <Carousel showArrows={true} stopOnHover={true} autoPlay={true} infiniteLoop={true} dynamicHeight={true} centerSlidePercentage={'80'}>
                <div>
                    <img src={activitie.images[0]} />
                </div>
                <div>
                    <img src={activitie.images[1]} />
                </div>
                <div>
                    <img src={activitie.images[2]} />
                </div>
            </Carousel>
            </div>
            <div className='map-container-with-map' style={{width:'90%',height:'60vh'}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnLRlCsIutdZMmkPI51Z3sIxG-CRW7qGw`} 
                loadingElement={<div style={{height:'100%'}} />}
                containerElement={<div style={{height:'100%'}} />}
                mapElement={<div style={{height:'100%'}} />}
                Markers={[activitie]}
                hoverSelectedActivity={activitie}
                />
                
            </div>
            </div>
            <div className="detail-product-data">
                <div className='data-columns'>
                    <div className="left-column">
                        <div className='detail-product-heading botton-border'>
                            <h2>{activitie.title}</h2>
                        </div>
                        <div className='detail-product-location botton-border'>
                            <div><div className='location-continer' id="location-container"><img src={locationPin}></img>
                            <div className='location-text'>{activitie.location}</div></div></div>
                        </div>

                        <div className="detail-product-price botton-border">
                                <h2>${activitie.pricePerPerson}</h2>
                                <a className='review'>Available in this period</a>
                        </div>
                    </div>
                    <div className="guide-container">
                        <UserCard/>
                    </div>
                </div>
                <div className="detail-product-data-rating botton-border">
                        <div className="rating"><BonFireRating/></div>
                        <div className='review'>
                            <a>1 Bonfire Review(s)</a> <span class="separator">|</span> <a>Add Your Bonfire Review</a>
                        </div>
                </div>
                
                <div className="detail-product-overview botton-border">
                        <h4>Quick Overview</h4>
                        <p>It is the deepest canyon in Europe, and second deepest in the world after the Grand Canyon of Colorado, USA. 78km long, and up to 1.300m deep, this "tear of Europe", as it is also called, is a great natural and tourist attraction not only in the area, but in the entire country.</p>
                        <div className='details'>
                            <div class="details-row">
                                <img src={TimerLogo}></img>
                                <h5>Duration: <p>{activitie.duration}</p></h5>
                            </div>
                            <div class="details-row">
                                <img src={FitnessLogo}></img>
                                <h5>Fitness level: <p>{activitie.fitnessLevel}</p></h5>
                            </div>
                            <div class="details-row">
                                <img src={KidLogo}></img>
                                <h5>Allowed for kids? <p>{activitie.goodForKids}</p></h5>
                            </div>
                            <div class="details-row">
                                <img src={GroupLogo}></img>
                                <h5>Group tours possible? <p>{activitie.groupTours}</p></h5>
                            </div>
                            <div class="details-row">
                                <img src={NumberLogo}></img>
                                <h5>Maximal group size: <p>{activitie.maximalGroupSize}</p></h5>
                            </div>
                        </div>
                </div>
                <div>
                    <IncludedAccordition activitie={activitie}/>
                </div>
                <div className='weather-widget' style={{height:'25%'}}>
                    <WeatherWidget activitie={activitie}/>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage
