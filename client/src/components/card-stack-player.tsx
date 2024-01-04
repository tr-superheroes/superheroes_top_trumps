export const CardStackPlayer:React.FC =() =>{
    // to be a loop based on the number of turns left, top card should always be there
    // need to add css dynamically based on number of cards
    return (
    <>
        <div className="card-wrapper">     
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="card card--player" src="/../src/assets/images/card2.png" />
            <img className="top top__data--player" src="/../src/assets/images/card3.png" />
  
        </div>        
    </>
    )
}