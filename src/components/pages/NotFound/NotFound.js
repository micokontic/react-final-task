import React from 'react'
import LostIcon from '../../images/LostIcon3.svg'
import "./NotFound.css"

function NotFound() {
    return (
    <div className="form-wrapper">
        <div className="form-container" style={{"grid-template-columns": "1.5fr 1fr"}}>
            <div className="form-content-right">
                <div className="form">
                    <h1>404 Page not found!</h1>
                    <p className="form-storyP">Are you lost?</p>
                </div>
            </div>

            <div className="form-content-left center-contenet">
                <div className="logo-img-container">
                    <img src={LostIcon}></img>
                </div>
            </div>
         </div>
    </div>
        
    )
}

export default NotFound
