import React from "react";
import { PowerstatsObj, PowerstatsType } from "../types/game.types";

interface FormProps{
    powerstats:PowerstatsObj;
    turn:boolean;
    onClickFn :(e:React.FormEvent<HTMLButtonElement>) =>void;
    optionChangeFn:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export const PowerstatsForm:React.FC<FormProps> =({powerstats,turn,onClickFn,optionChangeFn}) =>{

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
            {/*
            <input type="radio" id="intelligence" name="powerstats" value="50"/>
            <label htmlFor="intelligence">Intelligence: 50</label><br />
            <input type="radio" id="strength" name="powerstats" value="90" />
            <label htmlFor="strength">Strength: 90</label><br />
            <input type="radio" id="speed" name="powerstats" value="53" />
            <label htmlFor="speed">Speed: 53</label><br />
            <input type="radio" id="durability" name="powerstats" value="64" />
            <label htmlFor="durability">Durability: 64</label><br />
            <input type="radio" id="power" name="powerstats" value="95" />
            <label htmlFor="power">Power: 95</label><br />
            <input type="radio" id="combat" name="powerstats" value="65" />
            <label htmlFor="combat">Combat: 65</label><br />*/}
            <input className="hero__button" type="submit" value="Play Card" disabled={!turn} onClick={onClickFn}/>
        </form>
        </>
    )
}