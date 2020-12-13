import React, { useState } from "react";
import "./styles.css";

var flag = {
  "🇻🇨": "St.Vincent & Grenadines",
  "🇻🇪 ": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫": "Wallis & Futuna",
  "🇼🇸": "Samoa",
  "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa"
};

var flagsweknow = Object.keys(flag);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = flag[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }
  function flagClickHandler(emoji) {
    var meaning = flag[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Flag Interpret</h1>
      <input onChange={emojiHandler} />
      <h2>{meaning}</h2>
      <h3>flags we know</h3>
      {flagsweknow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={flag}
          >
            {" "}
            {flag}{" "}
          </span>
        );
      })}
    </div>
  );
}
