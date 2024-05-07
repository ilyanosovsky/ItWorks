import { useEffect } from "react";

const Hand = ({ deck, handName }) => {
    useEffect(() => {
      console.log(deck.length);
    });
  
    if (deck.length == 0) return <></>;
    else
      return (
        <>
          <h3>Deck {handName}</h3>
          <ul>
            {deck.map((card) => (
              <li key={card.value}>
                {card.value}
                {card.type}
              </li>
            ))}
          </ul>
        </>
      );
  }

  export default Hand;