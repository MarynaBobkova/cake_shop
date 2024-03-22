import React from "react";
import {fillingDescriptions, fillings, toppings } from "../../utils/constants";

const Fillings: React.FC = () => {
  return (
    <div>
      <h2>Cake fillings</h2>
 
      <div className="row justify-content-center row-cols-1 row-cols-md-3 g-3 ">
        <div className="card">
          <img src={toppings[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[0]}</h5>
            <p className="card-text">
              {fillingDescriptions[0]}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={toppings[1]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[1]}</h5>
            <p className="card-text">
            {fillingDescriptions[1]}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={toppings[2]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[2]}</h5>
            <p className="card-text">
            {fillingDescriptions[2]}
            </p>
          </div>
        </div>
        <div className="card ">
          <img src={toppings[3]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[3]}</h5>
            <p className="card-text">
            {fillingDescriptions[3]}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={toppings[4]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[4]}</h5>
            <p className="card-text">
            {fillingDescriptions[4]}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={toppings[5]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fillings[5]}</h5>
            <p className="card-text">
            {fillingDescriptions[5]}
            </p>
          </div>
        </div>
        <div />
      </div>
    </div>
    
  );
};

export default Fillings;
