import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import WithDebounce from "./WithDebounce";
import NoDebounce from "./NoDebounce";

const App = () => (
  <Fragment>
    <NoDebounce />
    <WithDebounce />
  </Fragment>
);

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<App />, document.getElementById("root"));
