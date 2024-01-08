import React from "react";
import { PowerstatsObj, PowerstatsType } from "../types/game.types";
import { RadioButton } from "./radio-button";

interface FormProps{
    powerstats:PowerstatsObj;
    onClickFn :(e:React.FormEvent<HTMLInputElement>) =>void;
    optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export const PowerstatsForm:React.FC<FormProps> =({powerstats,onClickFn,optionChangeFn}) =>{

    return (
        <>
        <h3>Powerstats</h3>
        <form className="hero__form">
            {  
            (Object.keys(powerstats)as PowerstatsType[]).map((stat, index) => (
                <RadioButton key={index.toString()} id={stat} onChange={optionChangeFn} 
                value={powerstats[stat]} label = {`${stat}: ${powerstats[stat]}`}/>
            ))}
            <input id="submit" className="hero__button" type="submit"  value="Play Card" onClick={onClickFn}/>
        </form>
        </>
    )
}