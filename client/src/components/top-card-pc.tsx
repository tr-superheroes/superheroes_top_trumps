import { PowerstatsList } from "./powerstats-list";
import { TrumpCard } from "../types/game.types";

interface TopCardPCProps {
  card: TrumpCard;
  turn: boolean;
  show: boolean;
  playTurnPC: () => void;
  gameRound: number;
}
export const TopCardPC: React.FC<TopCardPCProps> = ({
  card,
  turn,
  show,
  playTurnPC,
  gameRound
}) => {
  const divClasses = `hero hero--pc hero--pc${gameRound.toString()}`;

  if (turn) {
    playTurnPC();
  }

  return (
    <>
      {show && (
         <div className= {divClasses}>
          <img className="hero__img" src={card.image} />
          <h2 className="hero__header">{card.name}</h2>
          <PowerstatsList powerstats={card.powerstats} />
        </div>
      )}
    </>
  );
};
