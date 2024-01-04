import { PowerstatsForm} from "./powerstats-form"

export const CardPlayer:React.FC =() =>{
 
    return (
        <>
        <div className="hero hero__pc">
          <img className="hero__img" src="/../src/assets/images/hero2.png" />
          <h2 className="hero__header">Abin Sur</h2>

          <PowerstatsForm/>
          
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