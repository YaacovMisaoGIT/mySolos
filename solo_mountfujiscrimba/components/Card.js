import React from "react"
 

export default function Card(props){
    return(
        <div className="card">
          <img src={props.imageUrl} alt="" width="125px" height="168px"  className="card--icon"/>
          <div className= "card--stats">
              <div className="card--japanline">
                 <img src="../images/png.png" alt="" className="card--mapicon" />
                 <span className="location">{props.location}</span>
                 <a href={props.googleMapsUrl} className="card--gmap"> View on Google Maps </a>
              </div>
              <h3>{props.title}</h3>
              <span className="date">{props.startDate} - {props.endDate} </span> 
              <p className="paragraph"> {props.description}</p>
          </div>


        </div>
    )
}