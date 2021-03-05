import React,{useEffect,useRef} from 'react'
import './FlipCard.css'
import BonFireRating from './BonFireRating/BonFireRating'
import locationPin from './images/location.svg';
import {Link} from 'react-router-dom'


function FlipCard({ activitie, height, size, changeHoverSelectedActivitie }) {
  const card = useRef(null);

  useEffect(() => {
    if (size === "small") {
      card.current.addEventListener("mouseenter", () => {
        changeHoverSelectedActivitie(activitie);
      });
      card.current.addEventListener("mouseleave", () => {
        changeHoverSelectedActivitie(null);
      });
    }

    // cleanup this component
    return () => {
      if (size === "small") {
        // card.current.removeEventListener("mouseenter", () => {
        //   changeHoverSelectedActivitie(activitie);
        // });
        // card.current.removeEventListener("mouseleave", () => {
        //   changeHoverSelectedActivitie(null);
        // });
      }
    };
  }, []);

  return (
    <div ref={card} className="flip-card-container" style={{ height: height }}>
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img src={activitie.images[0]} alt="Brohm Lake"></img>
            <figcaption>{activitie.title}</figcaption>
          </figure>

    <div className="card-front">
      <figure>
        <div className="img-bg"></div>
        <img src={activitie.images[0]} alt="Brohm Lake"></img>
        <figcaption>{activitie.title}</figcaption>
      </figure>

      <ul>
        <li><h3><span className='price-tag'>{activitie.pricePerPerson}$</span> per person</h3></li>
        {size==='big'?<li><div className='location-continer'><img src={locationPin}></img>
        <div className='location-text'>{activitie.location}</div></div></li>:<></>}
        
        <li><div className='bonfire-rating-container'>
                <BonFireRating/>
            </div>
         </li>
      </ul>
    </div>
    </div>

        <div className="card-back">
        <Link to='/detail'>
          <figure>
            <div className="img-bg"></div>
            <img src={activitie.images[0]} alt="Brohm Lake"></img>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
