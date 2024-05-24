import { useEffect } from "react";
import Hand from "./Hand";

const NAMES = {
  player: "Player",
  dealer: "Dealer",
};

const Desk = (props) => {
  useEffect(() => {
    console.log(props.status);
  });
  return (
    <>
      <h1>Game {props.status}</h1>
      <Hand deck={props.deckPlayer} handName={NAMES.player} />
      <Hand deck={props.deckDealer} handName={NAMES.dealer} />
    </>
  );
};

export default Desk;
