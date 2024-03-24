import React from "react";
import {fillingDescriptions, fillings, toppings } from "../../utils/constants";

const Fillings: React.FC = () => {
  return (
    <div>
      <h2 className="header1 text-center">Cake fillings</h2>
      <div className="container">
        <div className="row justify-content-center">         
          {fillings.map((filling, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <img src={toppings[index]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{filling}</h5>
                  <p className="card-text">
                    {fillingDescriptions[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fillings;