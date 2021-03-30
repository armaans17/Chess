import "./App.css";
import Board from "./components/Board.jsx";
import { MainContextProvider } from "./context/main.jsx";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Board />
      </MainContextProvider>
    </div>
  );
}

export default App;
