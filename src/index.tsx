import * as React from "react";
import { render } from "react-dom";
import { Redirect, Route, HashRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useStateWithStorage } from "./hooks/useStateWithStorage";
import { Editor } from "./pages/Editor";
import { History } from "./pages/History";

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}`;

const StorageKey = "/editor:text";
const Main: React.FC = () => {
  const [text, setText] = useStateWithStorage("", StorageKey);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/editor">
          <Editor text={text} setText={setText} />
        </Route>
        <Route exact path="/history">
          <History setText={setText} />
        </Route>
        <Redirect to="/editor" path="" />
      </Router>
    </>
  );
};

render(<Main />, document.getElementById("app"));
