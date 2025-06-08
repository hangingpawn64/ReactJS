import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "TODO 1",
      desc: "i am todo 1",
    },
    {
      title: "TODO 2",
      desc: "i am todo 2",
    },
    {
      title: "TODO 3",
      desc: "i am todo 3",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false </button>
      )}
      {/* {showbtn && <button> this is a button</button>} */}

      {todos.map((todo) => {
        // return <Todo todo={todo} />;
        return (
        <div key={todo.title}>
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
        )
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
