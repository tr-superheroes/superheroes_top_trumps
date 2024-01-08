import { useContext, useState } from "react"
import { GameContext, StartGame } from "./startGame"
import { DRAW, MY_TURN, PC_ROUND_WIN, PC_WIN, PLAYER_ROUND_WIN, PLAYER_WIN, PLAY_CARD_MSG, PowerstatsObj, PowerstatsType, YOUR_TURN} from "../types/game.types";
import { TopCardPlayer } from "./top-card-player";
import { TopCardPC } from "./top-card-pc";
import { CardStack } from "./card-stack";
import { MessageContainer } from "./message";
import { NextTurn } from "./nextTurn";

export const GameContainer:React.FC = () =>{
    //load message container for showing scores/winner for each round
    //keep score in state
    
    const allCardsArray = useContext(GameContext);
    const playerCardsArray = allCardsArray.slice(0,allCardsArray.length/2); //slice does not include the last index,so no repeats
    const pcArray = allCardsArray.slice((allCardsArray.length/2),allCardsArray.length);

    //use it like a stack and pop from top to 0, always starting at highest index
    const [cardIndex,setCardIndex] = useState(playerCardsArray.length-1);
    const [scores,setScores] = useState({pc:0,player:0});
    const [playerTurn,setPlayerTurn] = useState(true);//used by player to enable/disable play button
    const [chosenPowerStat,setChosenPowerStat] = useState<PowerstatsType|undefined>();
    const [message,setMessage] = useState(YOUR_TURN);
    const [showPCCard,setShowPCCard] = useState(false);
    const [PCTurn, setPCTurn] = useState(false);
    const [playedCard,setPlayedCard] = useState(false);
    const [isGameDone,setIsGameDone] = useState(false);

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChosenPowerStat(e.target.id as PowerstatsType);
    }
    
    const handleNextTurn =() =>{
        //check if last turn
        if(playedCard){
        
            if(cardIndex > 0){
                if (playerTurn) {
                    setPlayedCard(false);
                    setMessage(YOUR_TURN);
                    setPCTurn(false);
                }
                else {
                    setMessage(MY_TURN);
                    setPCTurn(true);
                }
                //assign for next round trigger
                const tmp = cardIndex-1;  
                setCardIndex(tmp);
                setShowPCCard(false);
            }else{
                //set winner message
                if(scores.player > scores.pc){  
                    setMessage(PLAYER_WIN);
                }else if(scores.player < scores.pc){
                    setMessage(PC_WIN);
                }else{
                    setMessage(DRAW);
                }
                setTimeout(()=>{
                    setIsGameDone(true);
                },5000);
            }
        }else{
            setMessage(PLAY_CARD_MSG);
        }
        
    }
    const handlePlay = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        //e.currentTarget.disabled = true;
        
        if(!playedCard && chosenPowerStat !== undefined){
            const playerStat = (playerCardsArray[cardIndex].powerstats)[chosenPowerStat];
            const pcStat = (pcArray[cardIndex].powerstats)[chosenPowerStat];
        
            setPlayedCard(true);
            
            if( parseInt(playerStat)> parseInt(pcStat) ){
                //set score
                const newScores = {...scores,player:scores.player+1};
                setScores(newScores);
                setPlayerTurn(true);
                setMessage(`${PLAYER_ROUND_WIN} with ${chosenPowerStat} ${playerStat}!`);
            }else if(parseInt(playerStat)< parseInt(pcStat)){
                const newScores = {...scores,pc:scores.pc+1};
                setScores(newScores);
                setPlayerTurn(false);
                setMessage(`${PC_ROUND_WIN} with ${chosenPowerStat} ${pcStat}!`);
            }else{
                //scores equal
                setPlayerTurn(true);
                setMessage(`${DRAW} with ${chosenPowerStat} ${playerStat}!`);
            }
            setShowPCCard(true);
        }
    }

    const findHighestStat = (pcPowerStats:PowerstatsObj):string => {
        let max = 0; let pcStat = "";
        (Object.keys(pcPowerStats)as PowerstatsType[]).forEach((stat) => {
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
        const highestPowerStat = findHighestStat(pcArray[cardIndex].powerstats) as PowerstatsType ;
        const playerStat = (playerCardsArray[cardIndex].powerstats)[highestPowerStat];
            const pcStat = (pcArray[cardIndex].powerstats)[highestPowerStat];
            await timeout(2000);
            
            if(!isGameDone){
                if( parseInt(pcStat)< parseInt(playerStat) ){
                    //set score
                    const newScores = {...scores,player:scores.player+1};
                    setScores(newScores);
                    setPlayerTurn(true);
                    setMessage(`${PLAYER_ROUND_WIN} with ${highestPowerStat} ${parseInt(playerStat) }!`);
                }else if(parseInt(playerStat)< parseInt(pcStat)){
                    const newScores = {...scores,pc:scores.pc+1};
                    setScores(newScores);
                    setPlayerTurn(false);
                    setMessage(`${PC_ROUND_WIN} with ${highestPowerStat} ${parseInt(pcStat) }!`);
                }else{
                    //scores equal
                    setPlayerTurn(true);
                    setMessage(`${DRAW} with ${highestPowerStat} ${parseInt(pcStat) }!`);
                }
                setShowPCCard(true);
                setPCTurn(false);
            }
    }

    return (
        <>
        {!isGameDone && <main className="main-layout">

            <div className="card-container">
            <TopCardPC card={pcArray[cardIndex]} turn={PCTurn} 
            gameRound = {playerCardsArray.length - cardIndex} 
            show={showPCCard} playTurnPC={playTurnPC} />

                <CardStack 
                cssClassType = "pc"
                topCardImage = "/../src/assets/images/card3.png"
                cardBackImage = "/../src/assets/images/card2.png"
                showTopCardData = {showPCCard}
                stackLength = {cardIndex} /> 
            </div>

            <MessageContainer message={message} imgUrl="" playerTurn={playerTurn}></MessageContainer>
            
            <div className = "button-wrapper">
                {!PCTurn && showPCCard &&
                <NextTurn onClickFn={handleNextTurn}/>
                }
            </div>
            
            <div className="card-container">
            
                <TopCardPlayer card={playerCardsArray[cardIndex]} 
                onClickFn={handlePlay} optionChangeFn ={handleOptionChange} 
                gameRound = {playerCardsArray.length - cardIndex} showTime = {showPCCard || PCTurn}  />

                <CardStack 
                cssClassType = "player"
                topCardImage = "/../src/assets/images/card3.png"
                cardBackImage = "/../src/assets/images/card2.png"
                showTopCardData = {true}
                stackLength = {cardIndex} /> 
            </div>
            
        </main>}
        {isGameDone && <StartGame/>}
  
        </>
    )
}