import React from 'react'
import "./UserCard.css"
import GuideLogo from "../images/guide.svg"

function UserCard({type}) {
    return (
        <div className="user-card-container">
            <div className="profile-img zoom">
                <img className='image' src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"></img>
            </div>
            <div className='profile-details' >
                {type==="user"?'':
                <div className='guide-logo-container'>
                    <img className='guide-logo-img' src={GuideLogo}></img>
                    <h5 style={{display:'block'}}>GUIDE</h5>
                </div>
                }
                <h4>Marko Markovic</h4>
            </div>
        </div>

    )
}

export default UserCard
