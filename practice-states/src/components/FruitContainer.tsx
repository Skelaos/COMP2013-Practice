import FruitCard from "./FruitCard";
import type { fruit } from "../data/data";

interface fruitData {
  data: fruit[];
}

export default function FruitContainer({ data }: fruitData) {
  return (
    <div className="FruitContainer">
      {data.map((product) => (
        <FruitCard key={product.id} {...product} />
      ))}
    </div>
  );
}
