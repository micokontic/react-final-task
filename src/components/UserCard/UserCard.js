import React from 'react'
import "./UserCard.css"
import GuideLogo from "../images/guide.svg"
import {Link} from "react-router-dom"

function UserCard({type}) {
    var styleOneColumn={
        "grid-template-columns":"1fr"
    }
    var styleDefault={

    }
    return (
        <div className="user-card-container">
            <Link to='/profile'>
            <div className="profile-img zoom">
                <img className='image' src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"></img>
            </div>
            <div className='profile-details' style={type==="user"?styleOneColumn:styleDefault} >
                {type==="user"?'':
                <div className='guide-logo-container'>
                    <img className='guide-logo-img' src={GuideLogo}></img>
                    <h5 style={{display:'block'}}>GUIDE</h5>
                </div>
                }
                <h4>Marko Markovic</h4>
            </div>
            </Link>
        </div>

    )
}

export default UserCard
