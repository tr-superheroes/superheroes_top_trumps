import { useContext,createContext } from "react"
import { CardContainer } from "./cardContainer"
import { GameContext } from "./startGame"
import { FetchGameResponse } from "../types/game.types";

export const PlayerCardArrayContext = createContext<FetchGameResponse>([]);
export const GameContainer:React.FC = () =>{
    //load card containers for pc & player
    //load message container for showing scores/winner for each round
    //keep score in state
    //show player name
    
    const allCardsArray = useContext(GameContext)
    
    return (
        <PlayerCardArrayContext.Provider value={allCardsArray.slice(0,allCardsArray.length/2)}>
            <CardContainer/>
        </PlayerCardArrayContext.Provider>
    )
}