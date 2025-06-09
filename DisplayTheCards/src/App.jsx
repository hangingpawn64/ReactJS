import "./App.css";
import Card from "./components/cards";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setCardsData(data); // Store full data array in state
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }, []);

  return (
    <div className="card-grid">
      {cardsData.map((item, index) => (
        <Card
          key={index}
          heading={`card no ${index+1}`}
          title={item.title}
          id={item.id}
          body={item.body}
          userId={item.userId}
        />
      ))}
    </div>
  );
}

export default App;
