import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAddTodo, setClearAll } from "../redux/todoSlice";
import TodoList from "./TodoList";

export const getLocalStorage = () => {
  let todoList = localStorage.getItem("todoList");
  if (todoList) {
    return JSON.parse(localStorage.getItem("todoList"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [text, setText] = useState("");
  const todoItem = useSelector((state) => state.todoReducer.todoItem);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItem));
  }, [todoItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setAddTodo({
        id: new Date().valueOf(),
        name: text,
        done: false,
      })
    );
    setText("");
  };
  return (
    <>
      <main>
        {/* Header */}
        <h2>To-do List </h2>
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter your Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {/* Todo List  */}
        {todoItem.length > 0 && (
          <div className="list-item-container">
            {todoItem.map((todo) => {
              return <TodoList key={todo.id} {...todo} />;
            })}
          </div>
        )}
        {todoItem.length > 0 && (
          <div className="clear-btn-container">
            <button
              className="clear-btn"
              onClick={() => dispatch(setClearAll())}
            >
              {" "}
              Clear All
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Todo;
