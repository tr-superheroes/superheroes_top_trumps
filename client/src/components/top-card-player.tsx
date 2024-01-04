import { TrumpCard } from "../types/game.types"
import { PowerstatsForm} from "./powerstats-form"
interface CardProps{
  card:TrumpCard;
}
export const TopCardPlayer:React.FC<CardProps> =({card}) =>{
  console.log('card here:'+card.name);
    return (
        <>
        <div className="hero hero__pc">
          <img className="hero__img" src="/../src/assets/images/hero2.png" />
          <h2 className="hero__header">{card.name}</h2>

          <PowerstatsForm/>
          
        </div>
        </>
    )
}