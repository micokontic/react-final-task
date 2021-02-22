import React from 'react'
import bonfireFull from '../images/bonfire_full.svg';
import bonfireEmpty from '../images/bonfire_empty.svg';

function BonFireRating() {
    return (
        <div className='bonfire-rating'>
        <img src={bonfireFull}/>
        <img src={bonfireFull}/>
        <img src={bonfireFull}/>
        <img src={bonfireFull}/>
        <img src={bonfireEmpty}/>
    </div>
    )
}

export default BonFireRating
