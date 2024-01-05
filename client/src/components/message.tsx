interface MessageProps{
    message:string;
    imgUrl:string
}
export const MessageContainer:React.FC<MessageProps> =({message,imgUrl}) =>{
    return (
        <div id="message">
            <p>{message}</p>
            {
             imgUrl && 
                <img src={imgUrl} alt="Whose turn image"/>
            }
        </div>
    )
}