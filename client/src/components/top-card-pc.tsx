import { PowerstatsList } from "./powerstats-list";
import { TrumpCard } from "../types/game.types";

interface TopCardPCProps {
  card: TrumpCard;
  turn: boolean;
  show: boolean;
  playTurnPC: () => void;
}
export const TopCardPC: React.FC<TopCardPCProps> = ({
  card,
  turn,
  show,
  playTurnPC,
}) => {
  console.log("PC card", card.name);
  console.log("PC turn", turn);
  if (turn) {
    playTurnPC();
  }

  return (
    <>
      {show && (
        <div className="hero hero--pc">
          <img className="hero__img" src={card.image} />
          <h2 className="hero__header">{card.name}</h2>
          <PowerstatsList powerstats={card.powerstats} />
        </div>
      )}
    </>
  );
};
