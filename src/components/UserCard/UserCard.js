import React from 'react'
import "./UserCard.css"

function UserCard() {
    return (
        <div className="user-card-container">
            <div className="profile-img zoom">
                <img className='image' src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"></img>
            </div>
            <h4>Marko Markovic</h4>
        </div>

    )
}

export default UserCard
