export const CardPlayer:React.FC =() =>{
    //add a radio button
    //add a play button
    //shw image
    //show name as label
    return (
        <>
        <div className="hero hero__pc">
          <img className="hero__img" src="/../src/assets/images/hero2.png" />
          <h2 className="hero__header">Abin Sur</h2>
          <h3>Powerstats</h3>
          <form className="hero__form" action="/action_page.php">
            <input type="radio" id="intelligence" name="powerstats" value="50"/>
            <label htmlFor="intelligence">Intelligence: 50</label><br />
            <input type="radio" id="strength" name="powerstats" value="90" />
            <label htmlFor="strength">Strength: 90</label><br />
            <input type="radio" id="speed" name="powerstats" value="53" />
            <label htmlFor="speed">Speed: 53</label><br />
            <input type="radio" id="durability" name="powerstats" value="64" />
            <label htmlFor="durability">Durability: 64</label><br />
            <input type="radio" id="power" name="powerstats" value="95" />
            <label htmlFor="power">Power: 95</label><br />
            <input type="radio" id="combat" name="powerstats" value="65" />
            <label htmlFor="combat">Combat: 65</label><br />
            <input className="hero__button" type="submit" value="Play Card" />
          </form>
        </div>
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