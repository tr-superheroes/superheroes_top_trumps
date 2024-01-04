import { PowerstatsList } from "./powerstats-list"

export const CardPC:React.FC =() =>{

    return (
        <>
        <div className="hero hero--pc">
          <img className="hero__img" src="/../src/assets/images/hero1.png" />
          <h2 className="hero__header">Abe Sapien</h2>
          
          <PowerstatsList/>

        </div>
        <div className="card-wrapper">
          
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
          
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
          
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
          
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
          
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
        
          <img className="card card--pc" src="/../src/assets/images/card1.png" />
          
          <img className="top top__data--pc" src="/../src/assets/images/card3.png" />
        </div>
        </>
    )
}