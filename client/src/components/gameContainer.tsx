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
    const playerCardsArray = allCardsArray.slice(0,allCardsArray.length/2); //slice does not include the last index,so no repeats
    const pcArray = allCardsArray.slice((allCardsArray.length/2),allCardsArray.length);

    //use it like a stack and pop from top to 0, always starting at highest index
    const [cardIndex,setCardIndex] = useState(playerCardsArray.length-1);
   // const [cardIndex,setcardIndex] = useState(pcArray.length-1);

    const [scores,setScores] = useState({pc:0,player:0});
    const [playerTurn,setPlayerTurn] = useState(true);//used by player to enable/disable play button
    const [chosenPowerStat,setChosenPowerStat] = useState<PowerstatsType|undefined>();
    const [message,setMessage] = useState("Your turn");
    const [showPCCard,setShowPCCard] = useState(false);
    const [PCTurn, setPCTurn] = useState(false);
    const [playedCard,setPlayedCard] = useState(false);
    const [isGameDone,setIsGameDone] = useState(false);

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
        //check if last turn
        if(cardIndex > 0){
            //assign for next round trigger
            const tmp = cardIndex-1;  
            setCardIndex(tmp);
            setShowPCCard(false);
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
            },6000);
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
                setMessage(`Player wins this round with ${chosenPowerStat} ${playerStat}!`);
            }else if(parseInt(playerStat)< parseInt(pcStat)){
                const newScores = {...scores,pc:scores.pc+1};
                setScores(newScores);
                setPlayerTurn(false);
                setMessage(`PC wins this round with ${chosenPowerStat} ${pcStat}!`);
            }else{
                //scores equal
                setPlayerTurn(true);
                setMessage(`It's a draw with ${chosenPowerStat} ${playerStat}!`);
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
        const highestPowerStat = findHighestStat(pcArray[cardIndex].powerstats) as PowerstatsType ;
        const playerStat = (playerCardsArray[cardIndex].powerstats)[highestPowerStat];
            const pcStat = (pcArray[cardIndex].powerstats)[highestPowerStat];
            await timeout(700);
            
            if(!isGameDone){
                if( parseInt(pcStat)< parseInt(playerStat) ){
                    //set score
                    const newScores = {...scores,player:scores.player+1};
                    setScores(newScores);
                    setPlayerTurn(true);
                    setMessage(`Player wins this round with ${highestPowerStat} ${parseInt(playerStat) }!`);
                }else if(parseInt(playerStat)< parseInt(pcStat)){
                    const newScores = {...scores,pc:scores.pc+1};
                    setScores(newScores);
                    setPlayerTurn(false);
                    setMessage(`PC wins this round with ${highestPowerStat} ${parseInt(pcStat) }!`);
                }else{
                    //scores equal
                    setPlayerTurn(true);
                    setMessage(`It's a draw with ${highestPowerStat} ${parseInt(pcStat) }!`);
                }
            }
        
        setShowPCCard(true);
        setPCTurn(false);
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

            <div className = "bubble-wrapper">
            <div className = "bubble-text">
                <MessageContainer message={message} imgUrl=""></MessageContainer>
                </div>
            </div>
            <div className = "fix-to-bottom">
                <NextTurn onClickFn={handleNextTurn}/>
            </div>
            
            <div className="card-container">
            
                <TopCardPlayer card={playerCardsArray[cardIndex]} 
                onClickFn={handlePlay} optionChangeFn ={handleOptionChange} 
                gameRound = {playerCardsArray.length - cardIndex} showTime = {showPCCard}  />

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