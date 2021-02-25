import React,{useEffect} from 'react'
import './AdventureCard.css'
import './ToolTip.css'
import BonFireRating from '../BonFireRating/BonFireRating'
import locationPin from '../images/location.svg'
import editLogo from '../images/edit.svg'
import deleteLogo from '../images/delete.svg'
import declineLogo from '../images/decline.svg'
import approveLogo from '../images/approve.svg'
import UserCard from '../UserCard/UserCard'



function AdventureCard({activitie,type}) {
    useEffect(() => {
        console.log(activitie)
    }, [])
    return (
        <div className='adventure-card-container' >
            <div>
                <img className="main-image" src={activitie.images[0]}></img>
            </div>
            <div className='activitie-data'>
                <h2>{activitie.title}</h2>
                <div className='bonfire-rating-container'>
                <BonFireRating/>
                </div>
                <div className='location-container'>
                    <div className='location-continer'><img src={locationPin}></img>
                    <div className='location-text'><h4>{activitie.location}</h4></div></div>
                </div>
            </div>

            {type=='host-edit'?
            <div>
            </div>:
            <div className="user-container zoom">
               <UserCard/>
            </div>
            }

            {type=='host-edit'?
            <div>
            </div>:
            <div className='reservation-data'>
                <h4>{type==="user"?'You r':'R'}eserved for: 22.06.2021</h4>
                <h4>Grop size: 2 people</h4>
            </div>
            }

            {type=='host-edit'?
            <div className='control-logos'>
                <div  className="tooltip">
                    <img src={editLogo}></img>
                    <span class="tooltiptext">Edit this adventure</span>
                </div>
                <div className="tooltip">
                    <img src={deleteLogo}></img>
                    <span class="tooltiptext">Delete this adventure</span>
                </div>
            </div>:
            (type==='user'?<div className='status'>
                <h4>Status: Pending</h4>
            </div>:
            <div className='control-logos'>
                <div  className="tooltip">
                    <img src={approveLogo}></img>
                    <span class="tooltiptext">Decline this reservation</span>
                </div>
                <div className="tooltip">
                    <img src={declineLogo}></img>
                    <span class="tooltiptext">Approve this reservation</span>
                </div>
            </div>
            )
            }
            
        </div>
    )
}

export default AdventureCard
