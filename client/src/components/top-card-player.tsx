import { TrumpCard } from "../types/game.types";
import { PowerstatsForm} from "./powerstats-form";
import  {PowerstatsList} from "./powerstats-list"

interface CardProps{
  card:TrumpCard;
  onClickFn:(e:React.FormEvent<HTMLButtonElement>) =>void;
  optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  gameRound: number;
  showTime:boolean;
}
export const TopCardPlayer:React.FC<CardProps> =({card,onClickFn,optionChangeFn, gameRound, showTime}) =>{
  const divClasses = `hero hero--player hero--player${gameRound.toString()}`;
  console.log('card here:'+card.name);
    return (
        <>
        <div className = {divClasses}>

          <img className="hero__img" src={card.image} />
          
          <h2 className="hero__header">{card.name}</h2>

          {showTime?<PowerstatsList powerstats={card.powerstats} />:
          <PowerstatsForm onClickFn={onClickFn} optionChangeFn={optionChangeFn} powerstats={card.powerstats}/>}

          
        </div>
        </>
    )
}