import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="page">
      <div className="box page__box">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="box__item" style={{ '--box__item-nbr': index }}></div>
        ))}
      </div>
    </div>
  );
}

export default Loader;
