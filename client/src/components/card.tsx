export interface CardProps {
    imageUrl: string;
    cssClassType: string;
}

export const Card:React.FC<CardProps> = ({imageUrl, cssClassType}) => {

    const cssClass = `card card--${cssClassType}`;
    return (
    <img className= {cssClass} src={imageUrl} />
    );
}