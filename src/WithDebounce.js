import React, { useState, useRef } from "react";
import { throttle } from "lodash";

export default function WithDebounce() {
  const [text, setText] = useState("");

  const delayedQuery = useRef(
    throttle(e => {
      setText(e);
      console.log("#COM DEBOUNCE: " + e);
    }, 5000)
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
