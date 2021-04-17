import { useState } from "react";
import "./styles.css";

const movieDB = {
  Fiction: [
    { name: "Harry Potter", rating: "4.5 /5" },
    { name: "Pirates of the Caribbean", rating: "4 /5" }
  ],

  Animated: [
    {
      name: "Zootopia",
      rating: "5 /5"
    },
    {
      name: "Ice Age",
      rating: "4.5 /5"
    }
  ],
  Action: [
    {
      name: "John Wick",
      rating: "4 /5"
    },
    {
      name: "The Lone Ranger",
      rating: "5 /5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  const genreClickHandler = (genre) => {
    setGenre(genre);
  };
  return (
    <div className="App">
      <h1>
        <span>📽️</span> Good Movies
      </h1>
      <h3 style={{ paddingBottom: "1rem" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started
      </h3>
      {/* <div>
        Object.keys(movieDB).map((genre)=> (
        <button onClick={() => genreClickHandler(genre)}
        />
        {genre}
          ));
      </div> */}
      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            style={{
              margin: "0.5rem",
              padding: "0.3rem",
              borderRadius: "0.3rem",
              width: "5rem"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        {movieDB[selectedGenre].map((genre) => (
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
              borderRadius: "0.5rem",
              borderColor: "white",
              width: "50%",
              textAlign: "center",
              marginLeft: "25%",
              marginTop: "3rem",
              fontSize: "large"
            }}
          >
            <li
              style={{ listStyle: "none", color: "white", fontWeight: "bold" }}
            >
              {genre.name}
            </li>
            <li
              style={{ listStyle: "none", color: "white", fontWeight: "bold" }}
            >
              {genre.rating}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
