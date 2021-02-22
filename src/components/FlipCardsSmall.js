import React from 'react'
import FlipCard from './FlipCard'

function FlipCardsSmall({activities,changeHoverSelectedActivitie}) {
    return (
        <div className='flip-cards-container-with-map'>
                {activities.map((activitie)=>{
                    return(<FlipCard activitie={activitie} 
                        height={'300px'} 
                        size={'small'}
                        changeHoverSelectedActivitie={changeHoverSelectedActivitie}
                         />)
                })}
        </div>
    )
}

export default FlipCardsSmall
