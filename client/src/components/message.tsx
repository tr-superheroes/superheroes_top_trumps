interface MessageProps{
    message:string;
    playerTurn: boolean;
    showWinner:boolean;
}
export const MessageContainer:React.FC<MessageProps> =({message, playerTurn, showWinner}) =>{
    return (
        <div className = {showWinner?" splash splash--end":(playerTurn?" splash splash--player":" splash splash--pc")}>
            <div className = "splash__text">
                <p className = "splash__text--main">{message}</p>
            </div>
        </div>
    )
}