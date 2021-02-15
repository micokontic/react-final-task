import React from 'react'
import './FlipCard.css'
import bonfireFull from './images/bonfire_full.svg';
import bonfireEmpty from './images/bonfire_empty.svg';
import locationPin from './images/location.svg';
function FlipCard() {
    return (
<div className="flip-card-container">
  <div className="flip-card">

    <div className="card-front">
      <figure>
        <div className="img-bg"></div>
        <img src="https://bluerivertara.me/me/img/blue-river-tara-9.jpg" alt="Brohm Lake"></img>
        <figcaption>Splavarenje Tarom</figcaption>
      </figure>

      <ul>
        <li><h3><span className='price-tag'>50$</span> per person</h3></li>
        <li><div className='location-continer'><img src={locationPin}></img><div className='location-text'>Tara River</div></div></li>
        <li><div className='bonfire-rating-container'>
              <div className='bonfire-rating'>
                  <img src={bonfireFull}/>
                  <img src={bonfireFull}/>
                  <img src={bonfireFull}/>
                  <img src={bonfireFull}/>
                  <img src={bonfireEmpty}/>

              </div>
          </div></li>
      </ul>
    </div>

    <div className="card-back">
      <figure>
        <div className="img-bg"></div>
        <img src="https://bluerivertara.me/me/img/blue-river-tara-9.jpg" alt="Brohm Lake"></img>
      </figure>

      <button>Book now</button>

      <div className="design-container">
        <span className="design design--1"></span>
        <span className="design design--2"></span>
        <span className="design design--3"></span>
        <span className="design design--4"></span>
        <span className="design design--5"></span>
        <span className="design design--6"></span>
        <span className="design design--7"></span>
        <span className="design design--8"></span>
      </div>
    </div>

  </div>
</div>
    )
}

export default FlipCard
