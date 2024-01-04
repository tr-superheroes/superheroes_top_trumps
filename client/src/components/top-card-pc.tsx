import { PowerstatsList } from "./powerstats-list"

export const TopCardPC:React.FC =() =>{

    return (
        <>
        <div className="hero hero--pc">
          <img className="hero__img" src="/../src/assets/images/hero1.png" />
          <h2 className="hero__header">Abe Sapien</h2>
          
          <PowerstatsList/>

        </div>
        </>
    )
}