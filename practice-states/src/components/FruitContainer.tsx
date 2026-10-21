import FruitCard from "./FruitCard";
import type { ProductContainerProps } from "./FruitApp";

export default function FruitContainer({
  data,
  productInfo,
  handleChangeQty,
}: ProductContainerProps) {
  return (
    <div className="FruitContainer">
      {data.map((fruit) => {
        const info = productInfo.find(
          (information) => information.id === fruit.id,
        );
        if (!info) return null;
        return (
          <FruitCard
            key={fruit.id}
            {...fruit}
            productInfo={info}
            handleChangeQty={(delta: number) =>
              handleChangeQty(fruit.id, delta)
            }
          />
        );
      })}
    </div>
  );
}
