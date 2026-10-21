import { useState } from "react";
import type { Fruit } from "../data/data";
import FruitContainer from "./FruitContainer";

export interface ProductInfo {
  id: number;
  quantity: number;
  price: number;
}

export interface ProductContainerProps {
  data: Fruit[];
  productInfo: ProductInfo[];
  handleChangeQty: (id: number, delta: number) => void;
}

export default function FruitsApp({ data }: ProductContainerProps) {
  // States
  // productInfo State - Stores Price & Quantity Chosen
  const [productInfo, setProductInfo] = useState<ProductInfo[]>(
    data.map((fruit: Fruit) => ({
      id: fruit.id,
      quantity: fruit.quantity,
      price: fruit.prices[0],
    })),
  );
  //Handlers
  // handleChangeQty Handler - Handles +/- Buttons
  // Ask for procudt id and delta argument,
  // check which id is changing, change number according to delta
  // Wether delta is + or -, add it to quantity
  // and return either quantity + delta or 0, whichever is bigger
  function handleChangeQty(id: number, delta: number) {
    setProductInfo((previous) => {
      return previous.map((info) =>
        info.id === id
          ? { ...info, quantity: Math.max(info.quantity + delta, 0) }
          : info,
      );
    });
  }

  return (
    <div>
      <FruitContainer
        data={data}
        productInfo={productInfo}
        handleChangeQty={handleChangeQty}
      />
    </div>
  );
}
