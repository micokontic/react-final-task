import React from 'react'
import "./UserCard.css"
import GuideLogo from "../images/guide.svg"
import {Link} from "react-router-dom"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import "../../components/Animations.css"


function NavUserCard({type}) {
    var styleOneColumn={
        "grid-template-columns":"1fr"
    }
    var styleDefault={

    }
    return (
    
            <div className="user-card-container navbar-user-card-conatiner slide-in-right">
                <Link to='/profile' className="flex-display">
                <div className="profile-img zoom">
                    <img className='image' src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"></img>
                </div>
                <h4>Marko Markovic</h4>
                </Link>
            </div>

    )
}

export default NavUserCard