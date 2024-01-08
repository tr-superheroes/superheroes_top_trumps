import { PowerstatsObj, PowerstatsType } from "../types/game.types";
import { ListItem } from "./list-item";
interface PowerstatsListProps {
    powerstats:PowerstatsObj
}
export const PowerstatsList:React.FC<PowerstatsListProps> =({powerstats}) =>{
    return (
        <>
        <h3>Powerstats</h3>
        <div className="hero__wrapper">
            <ul className="hero__powerstats">
            {  
            (Object.keys(powerstats) as PowerstatsType[]).map((stat, index)=> 
                (
                <ListItem key={index} value ={`${stat}: ${powerstats[stat]}`}/>
                ))}
            </ul>
        </div>
        </>
    )
}