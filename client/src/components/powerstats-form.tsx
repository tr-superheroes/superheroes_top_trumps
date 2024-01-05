import React from "react";
import { PowerstatsObj, PowerstatsType } from "../types/game.types";

interface FormProps{
    powerstats:PowerstatsObj;
    onClickFn :(e:React.FormEvent<HTMLButtonElement>) =>void;
    optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export const PowerstatsForm:React.FC<FormProps> =({powerstats,onClickFn,optionChangeFn}) =>{

    return (
        <>
        <h3>Powerstats</h3>
        <form className="hero__form">
            {  
            (Object.keys(powerstats)as PowerstatsType[]).map((stat,index) => (
                <>
                    <input key={index} type="radio" id={stat} name="powerstat" onChange={optionChangeFn} value={powerstats[stat]} />
                    <label htmlFor={stat}>{`${stat}: ${powerstats[stat]}`}</label><br/>
                </>
            ))}
            <input id="submit" className="hero__button" type="submit"  value="Play Card" onClick={onClickFn}/>
        </form>
        </>
    )
}