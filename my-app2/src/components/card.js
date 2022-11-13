import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

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