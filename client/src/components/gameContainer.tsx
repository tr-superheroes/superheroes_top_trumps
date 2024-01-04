import { useContext,createContext } from "react"
import { GameContext } from "./startGame"
import { FetchGameResponse } from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStackPC } from "./card-stack-pc";
import { CardStackPlayer } from "./card-stack-player";

export const PlayerCardArrayContext = createContext<FetchGameResponse>([]);
export const GameContainer:React.FC = () =>{
    //load card containers for pc & player
    //load message container for showing scores/winner for each round
    //keep score in state
    //show player name
    
    const allCardsArray = useContext(GameContext);
/*
    const [turns, setTurns] = useState();
    scores: { pc: 0, player: 0};
    data: {pc: [{}, {}, ], player: [{}, {}, {}];
    start with player
    next turn is winner
    */
    return (
        
        <PlayerCardArrayContext.Provider value={allCardsArray.slice(0,allCardsArray.length/2)}>
            <main className="main-layout">
            <div className="card-container">
            <TopCardPC/>
            <CardStackPC/>
            </div>
            <div className="card-container">
            <TopCardPlayer/>
            <CardStackPlayer/>
            </div>
            </main>  
        </PlayerCardArrayContext.Provider>
    )
}