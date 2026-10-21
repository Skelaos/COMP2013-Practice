import type { Fruit } from "../data/data";
import { useState } from "react";
import type { ProductInfo } from "./FruitApp";

interface ProductCardProps extends Fruit {
  productInfo: ProductInfo;
  handleChangeQty: (delta: number) => void;
}

export default function FruitCard({
  product,
  prices,
  img,
  productInfo,
  handleChangeQty,
}: ProductCardProps) {
  // Compound state containing selected price and quantity
  const [setProductInfo] = useState<ProductCardProps>({
    // Pass in an object to useState using curly brackets
    // Also, interface being passed into a state
    quantity: productInfo.quantity,
    prices: prices[0],
  });

  return (
    <div className="FruitCard">
      <h2>{product}</h2>
      <img src={img} alt="" height="100px" />
      <br />
      <select
        name="prices"
        id="prices"
        // The parameter is the event as onChange requires an event listener
        onChange={(e) =>
          setProductInfo((previous) => {
            return {
              ...previous,
              price: parseFloat(e.target.value),
            };
          })
        }
        /*Each price becomes an option containing a price*/
      >
        {prices.map((price) => (
          <option key={price} value={price}>
            ${price.toFixed(2)}
          </option>
        ))}
      </select>
      <br />
      <button //To change an object with onclick you need to use
        // a callback function to return an object based on the previous object
        onClick={() => handleChangeQty(-1)}
      >
        -
      </button>
      <span>{productInfo.quantity}</span>
      <button onClick={() => handleChangeQty(1)}>+</button>
      <p>Total: ${(productInfo.quantity * productInfo.price).toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}
