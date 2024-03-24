import React from 'react';

interface ProductCardProps {
  torte: string;
  title: string;
  description: string;
  productPrice: number;
  addToCart: (title: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ torte, title, description, productPrice, addToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = React.useState(0);

  const handleIncrement = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrement = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(title, selectedQuantity);
    setSelectedQuantity(0);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={torte} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Composition: {description}</p>
          <p className="card-text">Price: {productPrice}</p>
          <div className="d-flex align-items-center">
            <button className="btn btn-light me-2" onClick={handleDecrement}>-</button>
            <span>{selectedQuantity} PC.</span>
            <button className="btn btn-light ms-2" onClick={handleIncrement}>+</button>
            <button className="btn btn-info ms-2" onClick={handleAddToCart}>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;