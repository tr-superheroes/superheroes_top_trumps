export const CardPC:React.FC =() =>{
    //add a radio button
    //add a play button
    //shw image
    //show name as label
    return (
        <>
        <div className="hero hero--pc">
          <img className="hero__img" src="/../src/assets/images/hero1.png" />
          <h2 className="hero__header">Abe Sapien</h2>
          <h3>Powerstats</h3>
          <div className="hero__wrapper">
            <ul className="hero__powerstats">
              <li>Intelligence: 88</li>
              <li>Strength: 28</li>
              <li>Speed: 35</li>
              <li>Durability: 65</li>
              <li>Power: 100</li>
              <li>Combat: 85</li>
            </ul>
          </div>
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