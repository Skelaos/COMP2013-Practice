import type { fruit } from "../data/data";
import { useState } from "react";

interface ProductInfo {
  quantity: number;
  price: number;
}

export default function FruitCard({ product, prices, img, quantity }: fruit) {
  // Compound state containing selected price and quantity
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    // Pass in an object to useState using curly brackets
    // Also, interface being passed into a state
    quantity,
    price: prices[0],
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
        onClick={() =>
          setProductInfo((previous) => {
            return {
              ...previous,
              // Cannot short-circuit here
              quantity: previous.quantity > 0 ? previous.quantity - 1 : 0,
            };
          })
        }
      >
        -
      </button>
      <span>{productInfo.quantity}</span>
      <button
        onClick={() =>
          setProductInfo((previous) => {
            return {
              ...previous,
              quantity: previous.quantity + 1,
            };
          })
        }
      >
        +
      </button>
      <p>Total: ${(productInfo.quantity * productInfo.price).toFixed(2)}</p>
    </div>
  );
}
