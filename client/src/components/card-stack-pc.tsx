interface CardStackPCProps {
    show:boolean
}
export const CardStackPC:React.FC<CardStackPCProps> =({show}) =>{
// to be a loop based on the number of turns left, top card should always be there
console.log("PC card show in stack",show);
    return (
    <>
    <div className="card-wrapper">
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className="card card--pc" src="/../src/assets/images/card1.png" />
    <img className={show?"top top__data--pc":"card card--pc"} src={show?"/../src/assets/images/card3.png":"/../src/assets/images/card1.png"} />
    </div>        
    </>
    )
}