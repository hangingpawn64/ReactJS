import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Theme from "./components/Theme";
import Time from "./components/time";
import { Mic, SquarePen, Trash2 } from "lucide-react";

import { v4 as uuidv4 } from "uuid";
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [listening, setListening] = useState(false);

  const handleAdd = () => {
    if (todo.trim() === "") {
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleDelete = (e, id) => {
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(newTodos);
  };

  // speech
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Heard:", transcript);
    setTodo(transcript); // Autofill input with voice
    setListening(false);
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    setListening(false);
  };

  return (
    <>
      {<Theme />}
      {
        <div className="container flex flex-col items-center h-screen mx-auto my-5 rounded-xl p-5">
          <div className="text-6xl font-bold text-white mb-8">You Got This</div>

          <div className="relative group items-center">
            <div className="absolute -inset-0.5 rounded-3xl bg-blue-700/0 group-hover:bg-blue-700/20 blur-md transition-all duration-300 -z-10"></div>
            <div className="addTodo flex items-center w-full max-w-xl mx-auto mb-4">
              <div className="relative w-full">
                <input
                  onChange={handleChange}
                  value={todo}
                  className="commit px-4 py-2  rounded-3xl border-transparent focus:border-gray-300 focus:border transition-all duration-100 text-white w-full"
                  type="text"
                  placeholder="Commit a task..."
                />
                {/* speech */}
                <button
                  onClick={startListening}
                  className={`micButton absolute right-3 top-1/2 -translate-y-1/2 text-white px-2 py-2 rounded-full ${
                    listening ? "opacity-50" : ""
                  }`}
                  disabled={listening}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                  tabIndex={-1}
                >
                  <Mic className="h-6 w-6 cursor-pointer" />
                  {listening ? "..." : ""}
                </button>
                {/* /speech */}
              </div>
              <button
                onClick={handleAdd}
                className="addButton bg-blue-700 text-white py-2 rounded-3xl ml-2 border-transparent focus:border-white focus:border transition-all duration-100 cursor-pointer"
              >
                I Got This!
              </button>
            </div>
          </div>
          <div className="time text-white flex justify-center p-3 text-1xl">
            <Time />
          </div>
          <div className="todos flex-col rounded-4xl w-2/5">
            {todos.length === 0 && (
              <div className="notodos m-5 w-xl text-center text-xl font-extralight opacity-70">
                Add Shit to do!
              </div>
            )}
            {todos.map((item) => {
              return (
                <div
                  key={item.id}
                  className="todo flex justify-between p-2 text-white text-2xl my-2"
                >
                  <input
                    className="checkbox w-7 ml-4 mr-4 cursor-pointer"
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    value={todo.isCompleted}
                    id=""
                  />
                  <div className={item.isCompleted ? "line-through opacity-50"  : ""}>
                    {item.todo}
                  </div>
                  <div className="flex buttons h-full">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="editbtn p-2 py-1 text-sm font-bold text-white rounded-md mx-1 cursor-pointer"
                    >
                      <SquarePen />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="dltbtn p-2 py-1 text-sm font-bold text-white rounded-md mx-1 cursor-pointer"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}

export default App;
