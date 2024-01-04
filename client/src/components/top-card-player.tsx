import { PowerstatsForm} from "./powerstats-form"

export const TopCardPlayer:React.FC =() =>{
 
    return (
        <>
        <div className="hero hero__pc">
          <img className="hero__img" src="/../src/assets/images/hero2.png" />
          <h2 className="hero__header">Abin Sur</h2>

          <PowerstatsForm/>
          
        </div>
        </>
    )
}