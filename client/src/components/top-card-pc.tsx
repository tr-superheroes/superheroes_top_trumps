import { PowerstatsList } from "./powerstats-list";

interface PCCardProps{
  gameRound: number;
}

export const TopCardPC:React.FC<PCCardProps> =({gameRound}) =>{
  const divClasses = `hero hero--pc hero${gameRound.toString()}`;
    return (
        <>
        <div className= {divClasses}>
          <img className="hero__img" src="/../src/assets/images/hero1.png" />
          <h2 className="hero__header">Abe Sapien</h2>
          
          <PowerstatsList/>

        </div>
        </>
    )
}