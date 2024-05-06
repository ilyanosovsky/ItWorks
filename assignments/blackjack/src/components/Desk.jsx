const Desk = (props) => {
  console.log(props.gameStatus);
  return <h1>Game {props.gameStatus}</h1>;
};

export default Desk;
