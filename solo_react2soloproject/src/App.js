import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./Data "
  
export default function App(){
    const cards = Data.map(item =>{
      return (
        <Card
             {...item}
        />
      )
    })

    return (
        <div>
            <Navbar/>
            <section className="cards-list">
              {cards}  
            </section>
        </div>
    )

}