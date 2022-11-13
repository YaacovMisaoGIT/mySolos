import React from 'react'

export default function Dice(props) {

  const [dice, setDice] = React.useState(allNewDice())
    
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }
  const diceElements = dice.map( )
  
  return (
    <main>
    <div className="dice-container">
        {diceElements}
        {/* <div className='die-face'>
      <h2 className='die-num'>{value}</h2>
    </div> */}
    </div>
</main>

   
  )
}
