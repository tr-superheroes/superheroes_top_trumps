import { useContext,createContext, useState } from "react"
import { GameContext } from "./startGame"
import { FetchGameResponse, PowerstatsType, Winner } from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStackPC } from "./card-stack-pc";
import { CardStackPlayer } from "./card-stack-player";

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
    const [winner,setWinner] = useState<Winner|null>(null);
    const [playerTurn,setPlayerTurn] = useState(true);//used by player to enable/disable play button

    const [chosenPowerStat,setChosenPowerStat] = useState<PowerstatsType|undefined>('power');

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('chosen:'+e.target.id);
        setChosenPowerStat(e.target.id as PowerstatsType);
    }
    const handlePlay = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        console.log('here');
        //compare current cards' power stats

        if(chosenPowerStat !== undefined){
            console.log('player power:'+ (playerCardsArray[currentPlayerCardIndex].powerstats)[chosenPowerStat]);
            console.log('PC power:'+(pcArray[currentPCCardIndex].powerstats)[chosenPowerStat]);
            if((playerCardsArray[currentPlayerCardIndex].powerstats)[chosenPowerStat] > (pcArray[currentPCCardIndex].powerstats)[chosenPowerStat]){
                //set score
                const newScores = {...scores,player:scores.player+1};
                setScores(newScores);
                setWinner('Player');
                setPlayerTurn(true);
                
            }else if((playerCardsArray[currentPlayerCardIndex].powerstats)[chosenPowerStat] < (pcArray[currentPCCardIndex].powerstats)[chosenPowerStat]){
                
                const newScores = {...scores,pc:scores.pc+1};
                setScores(newScores);
                setWinner("PC"); // not setting don't know why
                setPlayerTurn(false);
                
            }else{
                //scores equal
                console.log('power equal');
                setPlayerTurn(true);
            }
            console.log('winner:'+winner);
            //check if last turn
            if(currentPlayerCardIndex-1 >= 0 && currentPCCardIndex-1 >=0){
                //assign for next round trigger
                console.log('index:'+currentPlayerCardIndex);
                setCurrentPlayerCardIndex(currentPlayerCardIndex-1);
                setCurrentPCCardIndex(currentPCCardIndex -1);
            }else{
                //set winner message
                console.log('done with cards');
                if(scores.player > scores.pc){  
                    console.log('Winner is Player');
                }
            }
        
        }

        
    }

    return (

        <main className="main-layout">
            <div className="card-container">
                <TopCardPC/>
                <CardStackPC/>
            </div>
            <div className="card-container">
                <TopCardPlayer card={playerCardsArray[currentPlayerCardIndex]} turn={playerTurn} onClickFn={handlePlay} optionChangeFn ={handleOptionChange} />
                <CardStackPlayer/> {//pass the current player index+1 to be able to loop through
                                    }
            </div>
        </main>  
        
    )
}