import { useState,useEffect, createContext } from "react"
import { FETCH_URL, FetchGameResponse } from "../types/game.types";
import { GameContainer } from "./gameContainer";

export const GameContext = createContext<FetchGameResponse>([]);
export const StartGame:React.FC =() =>{
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState<FetchGameResponse>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    //const noOfCards = 7;
    const fetchCards = async() =>{
        try{
            setIsLoading(true);
            const data = await fetch(FETCH_URL);
            const result = await data.json();
            setResponse(result.cards);
            setIsLoading(false);
            console.log(result.cards.length);
        }catch(error){
            console.log(error);
            setError(true);
        }
    }
    useEffect(() => {
          // Call the async function when component loads
        fetchCards();
        console.log(response);
        },[]); //handle no data case,maybe enable game button once data is ready

    const handleClick = () =>{
        setIsNewGame(false); //hides the button and loads the game container
    }

    return (
        <GameContext.Provider value={response}>
        {isNewGame &&
        <>
            <div className = "shield">
            {
            <div className = "shield__text">
                <p className ="shield__text--main" >Superhero</p>
                <p className ="shield__text--info">Top</p>
                <p className ="shield__text--info">Trumps</p>
            </div>
            }
            </div>
        </>}
        {isError && (<p>Error Loading the game</p>)}
        {!isError && isLoading &&  (<p>Loading</p>)}
        {!isError && !isLoading && isNewGame &&
        <>
            <div className = "start">
                <p>Click the button to start playing.</p>
                <button onClick={handleClick} >Start Game</button>
            </div>
        </>
        }   
            
            {!isNewGame && 
            <>
            <GameContainer/>
            </>
            }
        </GameContext.Provider>
    )
}