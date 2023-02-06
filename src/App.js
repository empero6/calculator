import logo from "./logo.svg";
import "./App.css";
import Base from "./components/Base";
import Screen from "./components/Screen";
import { Box } from "@mui/material";
import { Fragment } from "react";
import Buttons from "./components/Buttons";

function App() {
  return (
    <Fragment>
      <Base>
        <Screen />
        <Buttons />
      </Base>
    </Fragment>
  );
}

export default App;
