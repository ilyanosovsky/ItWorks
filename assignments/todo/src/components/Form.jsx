export const Form = (props) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "350px",
      }}
      onSubmit={props.addTodo}
    >
      <input type="text" name="title" />
      <button>Add ToDo</button>
    </form>
  );
};

export default Form;
