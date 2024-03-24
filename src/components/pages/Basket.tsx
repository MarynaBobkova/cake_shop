import React from "react";
import {
  tortes,
  titles,
  descriptions,
  productsPrice,
} from "../../utils/constants";

interface Props {
  selectedProducts: { title: string; quantity: number }[];
  removeFromCart: (index: number) => void;
  productsPrice?: Map<string, number>; // Обозначаем, что productsPrice может быть неопределенным
}

const Basket: React.FC<Props> = ({
  selectedProducts,
  removeFromCart,
  productsPrice,
}) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (productsPrice) {
      selectedProducts.forEach((product) => {
        const price = productsPrice.get(product.title);
        if (price !== undefined) {
          totalPrice += price * product.quantity;
        }
      });
    }
    return totalPrice;
  };

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <h1 className="display-5 text-center header1">Your Basket</h1>
      {selectedProducts.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {selectedProducts.map((product, index) => (
            <div key={index} className="row mb-3">
              <div className="col">{product.title}</div>
              <div className="col">{product.quantity}</div>
              <div className="col">
                Price:{" "}
                {productsPrice
                  ? (productsPrice.get(product.title) ?? 0) * product.quantity
                  : "N/A"}
              </div>
              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div>Total Price: {calculateTotalPrice()}</div>
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
