import { TrumpCard } from "../types/game.types"
import { PowerstatsForm} from "./powerstats-form"
interface CardProps{
  card:TrumpCard;
  onClickFn:() =>void;
  optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  gameRound: number;
}
export const TopCardPlayer:React.FC<CardProps> =({card,onClickFn,optionChangeFn, gameRound}) =>{
  const divClasses = `hero hero--player hero--player${gameRound.toString()}`;
  console.log('card here:'+card.name);
    return (
        <>
        <div className = {divClasses}>
          {//<img className="hero__img" src="/../src/assets/images/hero2.png" />
          }
          <img className="hero__img" src={card.image} />
          
          <h2 className="hero__header">{card.name}</h2>

          <PowerstatsForm onClickFn={onClickFn} optionChangeFn={optionChangeFn} powerstats={card.powerstats}/>
          
        </div>
        </>
    )
}