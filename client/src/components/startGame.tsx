import { useState,useEffect, createContext } from "react"
import { FETCH_URL, FetchGameResponse,NO_OF_CARDS } from "../types/game.types";
import { GameContainer } from "./gameContainer";

export const GameContext = createContext<FetchGameResponse>([]);
export const StartGame:React.FC =() =>{
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState<FetchGameResponse>([]);
    const fetchCards = async() =>{
        try{
            //const data = await fetch(FETCH_URL+noOfCards);
            //const result = await data.json();
            const result = {
                "cards": [
                  {
                    "id": "429",
                    "name": "Man-Wolf",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/91.jpg",
                    "powerstats": {
                      "intelligence": "63",
                      "strength": "44",
                      "speed": "35",
                      "durability": "42",
                      "power": "45",
                      "combat": "70"
                    }
                  },
                  {
                    "id": "474",
                    "name": "Moses Magnum",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/1020.jpg",
                    "powerstats": {
                      "intelligence": "75",
                      "strength": "28",
                      "speed": "12",
                      "durability": "42",
                      "power": "55",
                      "combat": "56"
                    }
                  },
                  {
                    "id": "162",
                    "name": "Carnage",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg",
                    "powerstats": {
                      "intelligence": "63",
                      "strength": "63",
                      "speed": "70",
                      "durability": "84",
                      "power": "88",
                      "combat": "90"
                    }
                  },
                  {
                    "id": "226",
                    "name": "Doctor Strange",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/55.jpg",
                    "powerstats": {
                      "intelligence": "100",
                      "strength": "10",
                      "speed": "12",
                      "durability": "84",
                      "power": "100",
                      "combat": "60"
                    }
                  },
                  {
                    "id": "584",
                    "name": "Shadow King",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/121.jpg",
                    "powerstats": {
                      "intelligence": "75",
                      "strength": "12",
                      "speed": "27",
                      "durability": "100",
                      "power": "100",
                      "combat": "75"
                    }
                  },
                  {
                    "id": "300",
                    "name": "Green Goblin II",
                    "image": "https://www.superherodb.com/pictures2/portraits/10/100/25.jpg",
                    "powerstats": {
                      "intelligence": "75",
                      "strength": "55",
                      "speed": "37",
                      "durability": "50",
                      "power": "44",
                      "combat": "26"
                    }
                  }
                ]
              }
            setResponse(result.cards);
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