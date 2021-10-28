import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import { nanoid } from "nanoid";
const initialToDoList = [
  {
    id: nanoid(),
    text: "eat breakfast",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "drnk coffee",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "practice algo",
    isComplete: false,
  },
];
function App() {
  const [todoArr, setTodoArr] = useState([]);
  useEffect(() => {
    setTodoArr(initialToDoList);
  }, []);

  return (
    <div className="to-do-list-container">
      <AddTodo todoArr={todoArr} setTodoArr={setTodoArr} />
      <DisplayTodo todoArr={todoArr} setTodoArr={setTodoArr} />
    </div>
  );
}

export default App;
