interface TurnProps{
    onClickFn : () =>void;
}

export const NextTurn:React.FC<TurnProps> =({onClickFn})=>{
    
    return (
        <button id="submit" onClick={onClickFn} >
            Next Turn
        </button>
    )

}