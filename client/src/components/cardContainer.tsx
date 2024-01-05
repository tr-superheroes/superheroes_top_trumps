import { TrumpCard } from "../types/game.types";
import { PlayerCardArrayContext } from "./gameContainer"
import {useContext} from "react"

export const CardContainer:React.FC = () =>{
    //set cards array
    const cards = useContext(PlayerCardArrayContext);
    return (
        <>
        {
            cards.map ((item:TrumpCard) => (
                <p>{item.name}</p> //this would be the card, need to see how to show the last one and hide rest
            ))
        }

        </>
    )
}