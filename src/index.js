import React from "react";
import ReactDOM from "react-dom";

import PostList from "./components/PostList";
import MoreButton from "./components/MoreButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PostList />
      <MoreButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
