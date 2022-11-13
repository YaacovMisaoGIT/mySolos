import React from "react"

export default function Card() {
    return (
        <div id="card" className="card">
            <figure className="textover">
            <img src="../images/katie-zaferes.png" className= "img-katie" />
            <figcaption className="sold--out">Sold Out</figcaption>
            </figure>
                <p>
            <img src="../images/star.png" className="img-star"/>
                   5.0 (6) USA
                </p>
            <h5>Life lessons with Katie Zaferes </h5>
            <h4> From $136 <span>/ person</span></h4> 
        </div> 
    )
}