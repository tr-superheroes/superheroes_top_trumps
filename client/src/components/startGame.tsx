import { useState,useEffect } from "react"
import { FETCH_URL } from "../types/game.types";

export const StartGame:React.FC =() =>{
    const noOfCards = 3;
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
        if (!isNewGame) {
          // Call the async function when isNewGame is false
          fetchCards();
          //if not error load gamecontainer
          console.log(response);
            
        }
      }, [isNewGame]);

    const handleClick = () =>{
        setIsNewGame(false);
        //do a fetch from server , set in context, load the gamecomponent

    }

    return (
        <div>
            {isNewGame && <button onClick={handleClick}>Start Game</button>}
        </div>
    )
}