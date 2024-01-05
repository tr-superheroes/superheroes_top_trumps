import { TrumpCard } from "../types/game.types"
import { PowerstatsForm} from "./powerstats-form"
interface CardProps{
  card:TrumpCard;
  onClickFn:() =>void;
  optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export const TopCardPlayer:React.FC<CardProps> =({card,onClickFn,optionChangeFn}) =>{
  console.log('card here:'+card.name);
    return (
        <>
        <div className="hero hero--player">
          {//<img className="hero__img" src="/../src/assets/images/hero2.png" />
          }
          <img className="hero__img" src={card.image} />
          
          <h2 className="hero__header">{card.name}</h2>

          <PowerstatsForm onClickFn={onClickFn} optionChangeFn={optionChangeFn} powerstats={card.powerstats}/>
          
        </div>
        </>
    )
}