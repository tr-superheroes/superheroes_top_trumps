export interface CardProps {
    imageUrl: string;
    imageClass: string;
}

export const Card:React.FC<CardProps> = ({imageUrl, imageClass}) => {

    const cssClass = `card ${imageClass}`;
    return (
    <img className= {cssClass} src={imageUrl} />
    );
}