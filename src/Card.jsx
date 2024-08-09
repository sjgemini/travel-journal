import React from "react"

export default function Card(props) {
  return (
    <section>
      <div className="wrapper">
        <img className="card-image" src={props.img} />
        <div className="card-wrapper">
          <div className="location-wrapper">
            <p className="card-location"><i class="fa fa-map-marker map-marker" aria-hidden="true"></i> {props.location}</p>
            <a className="map-link" href={props.map}>View on Google Maps</a>
          </div>
          <div className="text-wrapper">
            <h1 className="card-title">{props.title}</h1>
            <p className="card-dates">{props.start} - {props.end}</p>
            <p className="card-description">{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </section>
    
  )
}