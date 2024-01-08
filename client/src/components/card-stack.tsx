import { Card, CardProps } from "./card";

interface CardStackProps {
    stackLength: number;
    cssClassType: string;
    topCardImage: string;
    cardBackImage: string;
    showTopCardData: boolean;
}

export const CardStack:React.FC<CardStackProps> = 
({stackLength, cssClassType, topCardImage, showTopCardData, cardBackImage}) =>{

    const cssCardBackClass = `card card--${cssClassType}`;
    const cssTopLayerClass = `top top__data--${cssClassType}`;
    const noOfReversedCards = showTopCardData? stackLength: stackLength + 1;
    
    const cardArray: Array<CardProps> = Array.from({length: noOfReversedCards}, () => (
        {cardImage: cardBackImage,
        cssClass : cssCardBackClass}));  
        
    return (
        <div className="card-wrapper">
            {
            cardArray.length && cardArray.map((card: CardProps, index) => 
            <Card key= {index.toString()} cardImage = {card.cardImage} cssClass = {card.cssClass} />
            )
            }
            {showTopCardData &&
            <Card cardImage = {topCardImage} cssClass = {cssTopLayerClass} />
            }         
        </div>  
    );
}