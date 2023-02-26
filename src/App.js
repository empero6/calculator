import "./App.css";
import Base from "./components/Base";
import { Fragment, useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import classes from "./components/Screen.module.css";
import { Box } from "@mui/material";

function App() {
  const [nextNumber, setNextNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(0);
  const [upperResult, setUpperResult] = useState(0);

  // useEffect(() => {
  //   setUpperResult(result + operation);
  // }, [setUpperResult, operation, result]);

  const handleInput = (input) => {
    switch (input) {
      case "AC":
        setResult(0);
        setOperation(null);
        setNextNumber(null);
        setUpperResult();
        return result;
      case "%":
        setResult(result / 100);
        break;
      case "+":
        setOperation("+");
        setNextNumber(result);
        setResult(0);
        setUpperResult(result + input);
        break;
      case "-":
        setOperation("-");
        setNextNumber(result);
        setResult(0);
        setUpperResult(result + input);
        break;
      case "*":
        setOperation("*");
        setNextNumber(result);
        setResult(0);
        setUpperResult(result + input);
        break;
      case "/":
        setOperation("/");
        setNextNumber(result);
        setResult(0);
        setUpperResult(result + input);
        break;
      case "=":
        if (operation === "+") {
          setResult(nextNumber + result);
          setUpperResult();
          return result;
        } else if (operation === "-") {
          setResult(nextNumber - result);
          setUpperResult();
          return result;
        } else if (operation === "*") {
          setResult(nextNumber * result);
          setUpperResult();
          return result;
        } else if (operation === "/") {
          setResult(nextNumber / result);
          setUpperResult();
          return result;
        }
        setOperation(null);
        setNextNumber(null);
        break;
      default:
        setResult(parseFloat(result.toString() + input));
        break;
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
