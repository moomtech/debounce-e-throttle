import React, { useState } from "react";
import "./index.css";

export default function NoDebounce() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
    console.log("#SEM DEBOUNCE: " + e.target.value);
  }

  return (
    <div>
      <h1>Sem Debounce</h1>
      <input onChange={handleChange} placeholder="SEM DEBOUNCE" />
      <span>⇒</span>
      <input onChange={() => {}} value={text} />
    </div>
  );
}
