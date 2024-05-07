import "./App.css";
import Controls from "./components/Controls";
import Desk from "./components/Desk";
import { useState, useEffect } from "react";

const STATUSES = {
  inProgress: "In Progress",
  stopped: "Stopped",
  playerWin: "Player WIN",
  playerLoose: "Player LOOSE",
};

const buildDeck = () => {
  const fullSuites = ["♠", "♥", "♦", "♣"];

  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({ type: fullSuites[i], value: j });
    }
  }

  return deck;
};

// a fn thats shuffles the deck
const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

function countDeck(deck) {
  return deck.reduce((acc, card) => acc + card.value, 0);
}

const App = () => {
  const [deck, setDeck] = useState(shuffleDeck(buildDeck()));
  const [deckPlayer, setDeckPlayer] = useState([]);
  const [deckDealer, setDeckDealer] = useState([]);
  const [gameStatus, setGameStatus] = useState(STATUSES.inProgress);

  useEffect(() => {
    const playerHand = countDeck(deckPlayer);
    const dealerHand = countDeck(deckDealer);
    if (playerHand == 21) setGameStatus(STATUSES.playerWin);
    else if (playerHand > 21) setGameStatus(STATUSES.playerLoose);
    else if (gameStatus == STATUSES.stopped) {
      // Stop Buttom pressed
      // playerHand < 21
      if (dealerHand > 21 || playerHand > dealerHand)
        setGameStatus(STATUSES.playerWin);
      else setGameStatus(STATUSES.playerLoose);
    }
    console.log("player", deckPlayer, countDeck(deckPlayer));
    console.log("dealer", deckDealer, countDeck(deckDealer));
  });

  function handleDeal() {
    if (gameStatus != STATUSES.inProgress) return;
    const deckCopy = [...deck];
    const card = deckCopy.pop();
    setDeck(deckCopy);
    setDeckPlayer([...deckPlayer, card]);
    console.log("deal", deckPlayer);
  }

  function handleStop() {
    if (gameStatus != STATUSES.inProgress) return;
    setGameStatus(STATUSES.stopped);
    setDeckDealer([deck[0], deck[1]]);
    console.log("stop", deckPlayer, deckDealer);
  }
  return (
    <>
      <Desk status={gameStatus} deckPlayer={deckPlayer} deckDealer={deckDealer}/>
      <Controls handleDeal={handleDeal} handleStop={handleStop} />
    </>
  );
};

export default App;
