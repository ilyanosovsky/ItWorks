export const Form = (props) => {
  return (
    <form onSubmit={props.addTodo}>
      <input type="text" name="title" />
      <button>Add ToDo</button>
    </form>
  );
};

export default Form;
