export interface CardProps {
    cardImage: string;
    cssClass: string;
}

export const Card:React.FC<CardProps> = ({cardImage, cssClass}) => {

    return (
    <img className= {cssClass} src={cardImage} />
    );
}