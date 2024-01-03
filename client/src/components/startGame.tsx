import { useState,useEffect, createContext } from "react"
import { FETCH_URL, FetchGameResponse } from "../types/game.types";
import { GameContainer } from "./gameContainer";

export const GameContext = createContext<FetchGameResponse>([]);
export const StartGame:React.FC =() =>{
    const noOfCards = 7;
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState([]);
    const fetchCards = async() =>{
        try{
            const data = await fetch(FETCH_URL+noOfCards);
            const result = await data.json();
            setResponse(result);
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
                <caption> Welcome to SuperHero Top Trumps Game!</caption>
                <p>Click the button to start playing.</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
            
            {!isNewGame && <GameContainer/>}
        </GameContext.Provider>
    )
}