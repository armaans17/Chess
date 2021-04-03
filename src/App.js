import "./App.css";
import Board from "./components/Board.jsx";
import { MainContextProvider } from "./context/main.jsx";

function App() {
  return (
    <MainContextProvider>
      <div className="app">
        <Board />
      </div>
    </MainContextProvider>
  );
}

export default App;
