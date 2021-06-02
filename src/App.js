import React from "react";
import "./App.css";
import Display from "./Components/Display";
import Keyboard from "./Components/Keyboard";

function App() {
  let [firstVal, setFirstVal] = React.useState(null);
  let [secondVal, setSecondVal] = React.useState(null);
  const [symbol, setSymbol] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [state, setState] = React.useState(1);

  const keyboardKeysHandler = (e) => {
    onClickHandler(e.key);
    console.log(e.key, "from keyboard");
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keyboardKeysHandler);
  }, []);

  const onClickHandler = (val) => {
    console.log(val, "from onClick");
    if (isNaN(val)) {
      if (!symbol) {
        setSymbol(val);
      } else {
        switch (symbol) {
          case "+":
            setTotal(firstVal + secondVal);
            break;

          case "-":
            setTotal(firstVal - secondVal);
            break;

          case "/":
            setTotal(firstVal / secondVal);
            break;

          case "*":
            setTotal(firstVal * secondVal);
            break;

          default:
            setTotal((prev) => prev);
        }
        setSymbol(null);
      }
    } else {
      if (!symbol) {
        setFirstVal(+val);
        setState(2);
      } else {
        setSecondVal(+val);
        setState(3);
      }
    }
  };

  return (
    <div className="App">
      <Display current={total}></Display>
      <Keyboard onClickHandler={onClickHandler}></Keyboard>
    </div>
  );
}

export default App;
// state === 1 ? firstVal : state === 2 ? secondVal :
