import { useContext,createContext, useState } from "react"
import { GameContext } from "./startGame"
import { FetchGameResponse } from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStackPC } from "./card-stack-pc";
import { CardStackPlayer } from "./card-stack-player";

//export const PlayerCardArrayContext = createContext<FetchGameResponse>([]);
export const GameContainer:React.FC = () =>{
    //load message container for showing scores/winner for each round
    //keep score in state
    
    const allCardsArray = useContext(GameContext);
    const playerCardsArray = allCardsArray.slice(0,allCardsArray.length/2);
    const pcArray = allCardsArray.slice(allCardsArray.length/2+1,allCardsArray.length);

    //use it like a stack and pop from top to 0, always starting at highest index
    const [currentPlayerCardIndex,setCurrentPlayerCardIndex] = useState(playerCardsArray.length-1);
    const [currentPCCardIndex,setCurrentPCCardIndex] = useState(pcArray.length-1);

    const [scores,setScores] = useState({pc:0,player:0});
    const [winner,SetWinner] = useState();

    const handlePlay = () =>{
        console.log('here');
    }

    /*
    const [turns, setTurns] = useState();
    scores: { pc: 0, player: 0};
    data: {pc: [{}, {}, ], player: [{}, {}, {}];
    start with player
    next turn is winner
    */
    return (

        <main className="main-layout">
            <div className="card-container">
                <TopCardPC/>
                <CardStackPC/>
            </div>
            <div className="card-container">
                <TopCardPlayer card={playerCardsArray[currentPlayerCardIndex]}/>
                <CardStackPlayer/> {//pass the current player index+1 to be able to loop through
                                    }
            </div>
        </main>  
        
    )
}