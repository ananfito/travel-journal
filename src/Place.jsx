import React from "react"
import data from "./data.js"

export default function Place(props) {
    return (
        <div className="card">
            
            <div className="image-container"><img className="card--image" src={props.place.imageUrl} alt={props.place.altText} /></div>
            <div className="card--info">
                <div className="card--info__location-info">
                    <p className="location-text"><i className="fa-solid fa-location-dot"></i> {props.place.location.toUpperCase()}</p>
                    <a className="location-link" id="location-link" href={props.place.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card--info__title">{props.place.title}</h2>
                <p className="card--info__dates">{props.place.startDate} - {props.place.endDate}</p>
                <p className="card--info__description">{props.place.description} <a className="learn-more-link" href={props.place.wikiLink} target="_blank">Learn More</a></p>
            </div>
        </div>
    )
}