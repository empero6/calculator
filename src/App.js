import "./App.css";
import Base from "./components/Base";
import { Fragment, useState } from "react";
import Buttons from "./components/Buttons";
import classes from "./components/Screen.module.css";
import { Box } from "@mui/material";

function App() {
  const [nextNumber, setNextNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(0);
  const [upperResult, setUpperResult] = useState(0);

  // const [prevVal, setPrevVal] = useState(0);

  const handleInput = (input) => {
    if (input === "AC") {
      setResult(0);
      setOperation(null);
      setNextNumber(null);
      return result;
    } else if (input === "%") {
      setResult(result / 100);
    } else if (input === "+") {
      setOperation("+");
      setNextNumber(result);
      setResult(0);
    } else if (input === "-") {
      setOperation("-");
      setNextNumber(result);
      setResult(0);
    } else if (input === "*") {
      setOperation("*");
      setNextNumber(result);
      setResult(0);
    } else if (input === "/") {
      setOperation("/");
      setNextNumber(result);
      setResult(0);
    } else if (input === "=") {
      if (operation === "+") {
        setResult(nextNumber + result);
        return result;
      } else if (operation === "-") {
        setResult(nextNumber - result);
        return result;
      } else if (operation === "*") {
        setResult(nextNumber * result);
        return result;
      } else if (operation === "/") {
        setResult(nextNumber / result);
        return result;
      }
      setOperation(null);
      setNextNumber(null);
    } else {
      setResult(parseFloat(result.toString() + input));
    }
  };

  return (
    <Fragment>
      <Base>
        <Box className={classes["results-top-container"]}>{upperResult}</Box>
        <Box className={classes["results-container"]}>{result}</Box>
        <Buttons onClick={handleInput} />
      </Base>
    </Fragment>
  );
}

export default App;
