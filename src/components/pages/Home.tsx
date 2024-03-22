import React from 'react';
import {tortes} from '../../utils/constants';
import {titles} from '../../utils/constants';
import {descriptions} from '../../utils/constants';

import  { useState } from 'react';


const ProductCard = ({ torte, title, description }: { torte: string, title: string, description: string }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const handleIncrement = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrement = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    setSelectedQuantity(1);
    setShowQuantitySelector(true);
  };

  const handleConfirmQuantity = () => {
    
    // Здесь будет логика добавления товара в корзину
    // например, вызвать функцию, которая добавляет товар в корзину и передать ей количество selectedQuantity

    console.log(`Добавлено в корзину: ${selectedQuantity} PC.`);
    setShowQuantitySelector(false);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={torte} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {!showQuantitySelector ? (
            <button className="btn btn-info" onClick={handleAddToCart}>Add to Basket</button>
          ) : (
            <div className="d-flex align-items-center">
              <button className="btn btn-light me-2" onClick={handleDecrement}>-</button>
              <span>{selectedQuantity} PC.</span>
              <button className="btn btn-light ms-2" onClick={handleIncrement}>+</button>
              <button className="btn btn-info ms-2" onClick={handleConfirmQuantity}>Add to Basket</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className='cards'>
      <div>
      <h1 className="display-5 text-center header1">Our Products: Decorate your holiday with sweet happiness!</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-3">
        {tortes.map((torte, index) => (
          <ProductCard key={index} torte={tortes[index]} title={titles[index]} description={descriptions[index]} />
        ))}
      </div>
    </div>
  );
};

export default Home;