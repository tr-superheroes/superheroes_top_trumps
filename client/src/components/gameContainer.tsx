import { useContext, useState } from "react"
import { GameContext, StartGame } from "./startGame"
import { PowerstatsObj, PowerstatsType} from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStack } from "./card-stack";
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
    const [showPCCard,setShowPCCard] = useState(false);
    const [PCTurn, setPCTurn] = useState(false);
    const [playedCard,setPlayedCard] = useState(false);
    const [isGameDone,setIsGameDone] = useState(false);

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('chosen:'+e.target.id);
        setChosenPowerStat(e.target.id as PowerstatsType);
    }

    const handleNextTurn =() =>{
        //setChosenPowerStat(undefined); //doesn;t unset the chosen radio button
        //setPlayerTurn(true);
        if (playerTurn) {
            setPlayedCard(false);
            setMessage('Your turn');
            setPCTurn(false);
        }
        else {
            setMessage('PC turn');
            setPCTurn(true);
        }
        console.log("score player:"+scores.player);
        console.log("score pc:"+scores.pc);
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
            setTimeout(()=>{
                setIsGameDone(true);
            },3000);
        }
        setShowPCCard(false);
    }
    const handlePlay = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        //e.currentTarget.disabled = true;
        
        if(!playedCard && chosenPowerStat !== undefined){
            const playerStat = (playerCardsArray[currentPlayerCardIndex].powerstats)[chosenPowerStat];
            const pcStat = (pcArray[currentPCCardIndex].powerstats)[chosenPowerStat];
            console.log('player power:'+ playerStat);
            console.log('PC power:'+pcStat);
            setPlayedCard(true);
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
                setPlayerTurn(true);
                setMessage("It's a draw!");
            }
              setShowPCCard(true);
        }
    }

    const findHighestStat = (pcPowerStats:PowerstatsObj):string => {
        let max = 0; let pcStat = "";
        (Object.keys(pcPowerStats)as PowerstatsType[]).forEach((stat,index) => {
            if(parseInt(pcPowerStats[stat])>max){
                max=parseInt(pcPowerStats[stat]);
                pcStat=stat;
            }});
       return pcStat;
    }

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }
  

    
    const playTurnPC = async() => {
        console.log("in playturn");
        const highestPowerStat = findHighestStat(pcArray[currentPCCardIndex].powerstats) as PowerstatsType ;
        const playerStat = (playerCardsArray[currentPlayerCardIndex].powerstats)[highestPowerStat];
            const pcStat = (pcArray[currentPCCardIndex].powerstats)[highestPowerStat];
            console.log("highest stat ", pcStat);
            console.log('PCP player power:'+ playerStat);
            console.log('PCP PC power:'+pcStat);
            await timeout(700);
            
            if( parseInt(pcStat)< parseInt(playerStat) ){
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
        
        console.log("PCP handle play end");
        setShowPCCard(true);
        setPCTurn(false);

        
    }

    return (
        <>
        {!isGameDone && <main className="main-layout">

            <div className="card-container">
            <TopCardPC card={pcArray[currentPCCardIndex]} turn={PCTurn} 
            gameRound = {playerCardsArray.length - currentPlayerCardIndex} 
            show={showPCCard} playTurnPC={playTurnPC} />

                <CardStack 
                cssClassType = "pc"
                topCardImage = "/../src/assets/images/card3.png"
                cardBackImage = "/../src/assets/images/card2.png"
                showTopCardData = {showPCCard}
                stackLength = {currentPlayerCardIndex} /> 
            </div>

            <div className = "bubble-wrapper">
            <div className = "bubble-text">
                <MessageContainer message={message} imgUrl=""></MessageContainer>
                </div>
            </div>
            <div className = "fix-to-bottom">
                <NextTurn onClickFn={handleNextTurn}/>
            </div>

            <div className="card-container">
                <TopCardPlayer card={playerCardsArray[currentPlayerCardIndex]} 
                onClickFn={handlePlay} optionChangeFn ={handleOptionChange} 
                gameRound = {playerCardsArray.length - currentPlayerCardIndex}  />

                <CardStack 
                cssClassType = "player"
                topCardImage = "/../src/assets/images/card3.png"
                cardBackImage = "/../src/assets/images/card2.png"
                showTopCardData = {true}
                stackLength = {currentPlayerCardIndex} /> 
            </div>
            
        </main>}
        {isGameDone && <StartGame/>}
  
        </>
    )
}