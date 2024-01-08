interface MessageProps{
    message:string;
    imgUrl:string;
    playerTurn: boolean;
    showWinner:boolean;
}
export const MessageContainer:React.FC<MessageProps> =({message,imgUrl, playerTurn, showWinner}) =>{
    return (
        <div className = {showWinner?" splash splash--end":(playerTurn?" splash splash--player":" splash splash--pc")}>
            <div className = "splash__text">
            <p className = "splash__text--main">{message}</p>
            {
            imgUrl && 
                <img src={imgUrl} alt="Whose turn image"/>
            }
            </div>
        </div>
    )
}