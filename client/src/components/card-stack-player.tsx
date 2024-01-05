import { Card, CardProps } from "./card";

interface CardStackPlayerProps {
    gameRound: number;
    stackLength: number;
}

export const CardStackPlayer:React.FC<CardStackPlayerProps> =({stackLength, gameRound}) =>{
    console.log("stackLength", stackLength);
    console.log("gameRound", gameRound);
    // to be a loop based on the number of turns left, top card should always be there
    // need to add css dynamically based on number of cards
    const cardArray = Array.from({length: stackLength}, () => (
        {imageUrl: "/../src/assets/images/card2.png",
        imageClass : 'card--player'}));
    return (
        <div className="card-wrapper">
            {
            cardArray.length && cardArray.map((card: CardProps, index) => 
            <Card key= {index.toString()} imageUrl = {card.imageUrl} imageClass = {card.imageClass} />
            )
            }
            <img className="top top__data--player" src="/../src/assets/images/card3.png" />
        </div>  
    );
}