import "./App.css";
import Board from "./components/Board";
import { MainContextProvider } from "./context/main";

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
