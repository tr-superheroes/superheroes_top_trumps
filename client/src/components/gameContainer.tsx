import { useContext,createContext, useState } from "react"
import { GameContext } from "./startGame"
import { PowerstatsType} from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStackPC } from "./card-stack-pc";
import { CardStackPlayer } from "./card-stack-player";
import { MessageContainer } from "./message";
import { NextTurn } from "./nextTurn";

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
    const [playerTurn,setPlayerTurn] = useState(true);//used by player to enable/disable play button
    const [chosenPowerStat,setChosenPowerStat] = useState<PowerstatsType|undefined>();
    const [message,setMessage] = useState("Your turn");

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('chosen:'+e.target.id);
        setChosenPowerStat(e.target.id as PowerstatsType);
    }

    const handleNextTurn =() =>{
        console.log('next turn');
        setChosenPowerStat(undefined); //doesn;t unset the chosen radio button
        //setPlayerTurn(true);
        setMessage('Your turn');
        console.log("score player:"+scores.player);
        //check if last turn
        if(currentPlayerCardIndex-1 >= 0 && currentPCCardIndex-1 >=0){
            //assign for next round trigger
            console.log('index:'+currentPlayerCardIndex);
            
            setCurrentPlayerCardIndex(currentPlayerCardIndex-1);
            setCurrentPCCardIndex(currentPCCardIndex -1);
        }else{
            //set winner message
            if(scores.player > scores.pc){  
                setMessage('Player wins this game');
            }else if(scores.player < scores.pc){
                setMessage('PC wins this game');
            }else{
                setMessage("It's a draw!");
            }
        }
    }
    const handlePlay = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        //e.currentTarget.disabled = true;
        
        if(chosenPowerStat !== undefined){
            const playerStat = (playerCardsArray[currentPlayerCardIndex].powerstats)[chosenPowerStat];
            const pcStat = (pcArray[currentPCCardIndex].powerstats)[chosenPowerStat];
            console.log('player power:'+ playerStat);
            console.log('PC power:'+pcStat);
            //flip PC top card

            
            if( parseInt(playerStat)> parseInt(pcStat) ){
                //set score
                const newScores = {...scores,player:scores.player+1};
                setScores(newScores);
                setPlayerTurn(true);
                setMessage("Player wins this round!");
                
                
            }else if(parseInt(playerStat)< parseInt(pcStat)){
                
                const newScores = {...scores,pc:scores.pc+1};
                setScores(newScores);
                setPlayerTurn(false);
                setMessage("PC wins this round!");
                
            }else{
                //scores equal
                console.log('power equal');
                setPlayerTurn(true);
                setMessage("It's a draw!");
                
            }
        }

        
    }

    return (

        <main className="main-layout">
            <div className="card-container">
                <TopCardPC/>
                <CardStackPC/>
            </div>
            <div>
                <MessageContainer message={message} imgUrl=""></MessageContainer>
                <NextTurn onClickFn={handleNextTurn}/>
            </div>
            <div className="card-container">
                <TopCardPlayer card={playerCardsArray[currentPlayerCardIndex]} onClickFn={handlePlay} optionChangeFn ={handleOptionChange} />
                <CardStackPlayer/> {//pass the current player index+1 to be able to loop through
                                    }
            </div>
        </main>  
        
    )
}