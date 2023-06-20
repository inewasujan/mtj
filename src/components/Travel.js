import React from 'react'

export default function Travel(props) {
    return (
        <div className='travel'>
            <img src={`./images/${props.imgCover}`} className='travel-img' alt="mount_fuji"/>
            <div className='travel-img'>
            <div className='travel-stats'>
                <img className ="location-img" src="./images/location.ico" alt="location_holder"/>
                <span className='travel-location'>{props.location}</span>
                <span className='travel-link'>{props.maplink}</span>                               
            </div>
            <p className='card-title'><span className="bold">{props.title}</span></p>            
            <p className="date">{props.date}</p>
            <span>{props.description}</span>
            </div>
        </div>
    )
}