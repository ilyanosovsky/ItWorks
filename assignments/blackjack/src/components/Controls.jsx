const Controls = (props) => {
  return (
    <div>
      <button onClick={props.handleDeal}>Deal</button>
      <button onClick={props.handleStop}>Stop</button>
    </div>
  );
};

export default Controls;
