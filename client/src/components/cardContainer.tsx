import { TrumpCard } from "../types/game.types";
import { CardPC } from "./card-pc";
import { CardPlayer } from "./card-player";
import { PlayerCardArrayContext } from "./gameContainer"
import {useContext} from "react"

export const CardContainer:React.FC = () =>{
    //set cards array
    const cards = useContext(PlayerCardArrayContext);
    return (
        <>
        {
            /*cards.map ((item:TrumpCard) => (
                <p>{item.name}</p>
            ))
            */
           <>     
            <CardPC />
            <CardPlayer /></>
        }

        </>
    )
}