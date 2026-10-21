import "./App.css";
import DiamondContainer from "./components/DiamondContainer";
import Blurb from "./components/Blurb";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Diamond World</h1>
      <DiamondContainer data={data} />
      <Blurb />
    </>
  );
}

export default App;
