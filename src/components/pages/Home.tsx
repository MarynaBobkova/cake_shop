import React, { useState } from "react";
import {
  tortes,
  titles,
  descriptions,
  productsPrice,
} from "../../utils/constants";
import Basket from "./Basket";
import ProductCard from "../main/ProductCard";


interface HomeProps {
  selectedProducts: { title: string; quantity: number }[];
  removeFromCart: (index: number) => void;
}

export const Home: React.FC<HomeProps> = ({ selectedProducts, removeFromCart }) => {

  const[selectedProduct, setSelectedProducts] = useState<
    { title: string; quantity: number }[]
  >(selectedProducts);

  const addToCart = (title: string, quantity: number) => {
    const existingProductIndex = selectedProducts.findIndex(
      (product) => product.title === title
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...selectedProducts];
      updatedProducts[existingProductIndex].quantity += quantity;
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { title, quantity }]);
    }
  };

   removeFromCart = (index: number) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <div>
        <h1 className="display-5 text-center header1">
          Our Products: Decorate your holiday with sweet happiness!
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {tortes.map((torte, index) => (
          <ProductCard
            key={index}
            torte={tortes[index]}
            title={titles[index]}
            description={descriptions[index]}
            productPrice={productsPrice.get(titles[index]) || 0}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Basket
        selectedProducts={selectedProducts}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Home;