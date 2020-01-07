import React, { useState, useRef } from "react";
import { debounce } from "lodash";

export default function WithDebounce() {
  const [text, setText] = useState("");

  const delayedQuery = useRef(
    debounce(e => {
      setText(e);
      console.log("#COM DEBOUNCE: " + e);
    }, 500)
  ).current;

  function handleChange(e) {
    delayedQuery(e.target.value);
  }

  return (
    <div>
      <h1>Com Debounce</h1>
      <input onChange={handleChange} placeholder="COM DEBOUNCE" />
      <span>⇒</span>
      <input onChange={() => {}} value={text} />
    </div>
  );
}
