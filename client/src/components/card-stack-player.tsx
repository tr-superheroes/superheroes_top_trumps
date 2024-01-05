import { Card, CardProps } from "./card";

interface CardStackPlayerProps {
    gameRound: number;
    stackLength: number;
    cssClassType: string;
}

export const CardStackPlayer:React.FC<CardStackPlayerProps> =({stackLength, gameRound, cssClassType}) =>{
    console.log("stackLength", stackLength);
    console.log("gameRound", gameRound);
    // to be a loop based on the number of turns left, top card should always be there
    // need to add css dynamically based on number of cards
    const cardArray: Array<CardProps> = Array.from({length: stackLength}, () => (
        {imageUrl: "/../src/assets/images/card2.png",
        cssClassType : cssClassType}));
        const cssTopLayerClass = `top top__data--${cssClassType}`;
    return (
        <div className="card-wrapper">
            {
            cardArray.length && cardArray.map((card: CardProps, index) => 
            <Card key= {index.toString()}
            imageUrl = {card.imageUrl} 
            cssClassType = {card.cssClassType} />
            )
            }
            <img className= {cssTopLayerClass} src="/../src/assets/images/card3.png" />
        </div>  
    );
}