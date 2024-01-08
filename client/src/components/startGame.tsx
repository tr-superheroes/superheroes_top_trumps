import { useState,useEffect, createContext } from "react"
import { FETCH_URL, FetchGameResponse } from "../types/game.types";
import { GameContainer } from "./game-container";
import ShowLoading from "./show-loading";

export const GameContext = createContext<FetchGameResponse>([]);
export const StartGame:React.FC =() =>{
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState<FetchGameResponse>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    const fetchCards = async() =>{
        try{
            setIsLoading(true);
            const data = await fetch(FETCH_URL);
            const result = await data.json();
            setResponse(result.cards);
            setIsLoading(false);
        }catch(error){
            console.log(error);
            setError(true);
        }
    }
    useEffect(() => {
        fetchCards();
        },[]); 

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
        {isError && (<p className="loading-error">Error loading the game</p>)}
        {!isError && isLoading &&  
        <ShowLoading/>
        }
        {!isError && !isLoading && isNewGame &&
        <>
            <div className = "start">
                <button className = "button button__game button__game--start" onClick={handleClick} >Start Game</button>
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