interface MessageProps{
    message:string;
    imgUrl:string
}
export const MessageContainer:React.FC<MessageProps> =({message,imgUrl}) =>{
    return (
        <div className = "splash">
            <div className = "splash__text">
            <p className ="splash__text--main">{message}</p>
            { imgUrl && 
                <img src={imgUrl} alt="Whose turn image"/>
            }
            </div>
        </div>
    )
}