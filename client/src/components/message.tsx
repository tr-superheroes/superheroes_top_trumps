interface MessageProps{
    message:string;
    imgUrl:string;
    playerTurn: boolean;
}
export const MessageContainer:React.FC<MessageProps> =({message,imgUrl, playerTurn}) =>{
    return (
        <div className = {playerTurn?"splashPlayer":"splashRobot"}>
            <div className = {playerTurn?"splashPlayer__text":"splashRobot__text"}>
            <p className ={playerTurn?"splashPlayer__text--main":"splashRobot__text--main"}>{message}</p>
            {
             imgUrl && 
                <img src={imgUrl} alt="Whose turn image"/>
            }
            </div>
        </div>
    )
}