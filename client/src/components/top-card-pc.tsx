import { PowerstatsList } from "./powerstats-list"
import { TrumpCard } from "../types/game.types"

interface TopCardPCProps {
  card:TrumpCard;
  turn:boolean;
  onClickFn:() =>void;
  optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export const TopCardPC:React.FC<TopCardPCProps> =({card}) =>{

  console.log("PC card",card.name);

    return (
        <> 
        <div className="hero hero--pc">
          <img className="hero__img" src={card.image} />
          <h2 className="hero__header">{card.name}</h2>
          
          <PowerstatsList powerstats={card.powerstats}/>

        </div>
        </>
    )
}