import { useState,useEffect, createContext } from "react"
import { FETCH_URL, FetchGameResponse } from "../types/game.types";
import { GameContainer } from "./gameContainer";

export const GameContext = createContext<FetchGameResponse>([]);
export const StartGame:React.FC =() =>{
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState<FetchGameResponse>([]);
    //const noOfCards = 7;
    const fetchCards = async() =>{
        try{
            const data = await fetch(FETCH_URL);
            const result = await data.json();
            setResponse(result.cards);
            console.log(result.cards.length);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
          // Call the async function when component loads
          fetchCards();
          console.log(response);
        },[]);

    const handleClick = () =>{
        setIsNewGame(false); //hides the button and loads the game container
    }

    return (
        <GameContext.Provider value={response}>
        
            <div hidden={!isNewGame}>
                <p>Click the button to start playing.</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
            
            {!isNewGame && <GameContainer/>}
        </GameContext.Provider>
    )
}