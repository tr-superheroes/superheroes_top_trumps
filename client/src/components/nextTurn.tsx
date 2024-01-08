interface TurnProps{
    onClickFn : (e:React.MouseEvent<HTMLButtonElement>) =>void;
}

export const NextTurn:React.FC<TurnProps> =({onClickFn})=>{
    
    return (
        <button className = "button button__game button__game--play" id="submit" onClick={onClickFn} >
            Next Turn
        </button>
    )

}