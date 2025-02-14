import { use, useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const response = await axios
        .get("/api/jokes") // Here we can not aading full url because we have added proxy in vite.config.js file. proxy: { "/api": "http://localhost:8080", } it will automatically add the base url
        .then((response) => {
          setJokes(response.data);
        })
        .catch((error) => {
          console.error("Somethinig went wrong please try again", error);
        });
    };
    getJokes();
  }, []);
  console.log("jkes", jokes);

  return (
    <>
      <h1>Mern Project</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => {
        return (
          <div key={index}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
