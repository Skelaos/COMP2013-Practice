import "./App.css";
import data from "./data/data";
import FruitsApp from "./components/FruitApp.tsx";

function App() {
  return (
    <>
      <FruitsApp data={data} />
    </>
  );
}

export default App;
