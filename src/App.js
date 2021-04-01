import "./App.css";
import Board from "./components/Board.jsx";
import { MainContextProvider } from "./context/main.jsx";

function App() {
  const numbers = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const renderVerticalNum = () => {
    return (
      <div className="list vertical">
        {numbers.map((alpha) => (
          <div className="individual">{alpha}</div>
        ))}
      </div>
    );
  };

  const renderHorizontolNum = () => {
    // return (
    //   <div className="list horizontal">
    //     {numbers.map((alpha, i) => (
    //       <li>{i}</li>
    //     ))}
    //   </div>
    // );
  };

  return (
    <div className="app">
      <MainContextProvider>
        {renderVerticalNum()}
        <div>
          <Board />
          {renderHorizontolNum()}
        </div>
      </MainContextProvider>
    </div>
  );
}

export default App;
