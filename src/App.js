import React from "react";
import { useState } from "react";
import "./styles.css";

var color = "blue";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // this is taking the meaning out

    // if(userInput in emojiDictionary) {
    //   setMeaning(meaning)
    // } else {
    //     setMeaning("We'll find out its meaning soon")
    // }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Know those smileys... <span style={{ color }}></span>{" "}
      </h1>

      <input onChange={emojiInputHandler}></input>
      <div style={{ fontSize: "larger" }}> meaning: {meaning}</div>
      <h3>
        Search or <em>click</em> on any one of these smileys to know meaning{" "}
      </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              padding: "0rem 0.2rem"
            }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
