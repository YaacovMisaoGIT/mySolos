import React from "react"
 

export default function Card(props){
    return(
        <div className="card">
          <img src={props.imageUrl} alt="" width="125px" height="168px"  className="card--icon"/>
          <div className= "card--stats">
              <img src="../images/heromapicon.png" alt="" />
              <span className="location">{props.location}</span>
              <h3>{props.title}</h3>
              <span className="date">{props.startDate}-{props.endDate} </span> 
              <p className="paragraph"> {props.description}</p>
          </div>


        </div>
    )
}