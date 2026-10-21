import "./App.css";
import Counter from "./components/Counter";
import NewCounter from "./components/NewCounter";
import data from "./data/data";
import FruitContainer from "./components/FruitContainer";

function App() {
  return (
    <>
      <Counter />
      <NewCounter />
      <FruitContainer data={data} />
    </>
  );
}

export default App;
